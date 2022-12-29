import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core'
import { MatDialog } from '@angular/material/dialog';
import * as _ from 'lodash';
import { map, of, Subject } from 'rxjs';
import { API_CONSTANTS } from 'src/app/core/constants/apiUrlConstants';
import { EDIT_PROFILE_FORM } from 'src/app/core/constants/formConstant';
import { localKeys } from 'src/app/core/constants/localStorage.keys';
import { ApiService } from 'src/app/core/services';
import { FormService } from 'src/app/core/services/form/form.service';
import { LocalStorageService } from 'src/app/core/services/local-storage/local-storage.service';
import { ProfileService } from 'src/app/core/services/profile/profile.service';
import { SessionService } from 'src/app/core/services/session/session.service';
import { DynamicFormComponent, DynamicFormData } from 'src/app/shared';
import { InputDialogueBoxComponent } from 'src/app/shared/components/dialogue-box/dialogue-box.component';
import { ExitPopupComponent } from 'src/app/shared/components/exit-popup/exit-popup.component';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  private win: any = window;
  imgData = {
    type: 'profile',
    image: '',
    isUploaded: true
  }
  path: any;
  localImage: any;
  @ViewChild('editProfile') editProfile: DynamicFormComponent;
  public formData: any;
  showForm: any = false;
  type = 'profile'

  constructor(private formService: FormService, private profileService: ProfileService, private localStorage: LocalStorageService, private apiService: ApiService, private http: HttpClient, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.localStorage.getLocalData(localKeys.USER_DETAILS).then((user) => {
      if (user) {
        this.imgData.image = (user.image) ? user.image : '';
        this.formService.getForm(EDIT_PROFILE_FORM).subscribe((form) => {
          this.formData = form
          this.preFillData(JSON.parse(user));
        })
      }
    })
  }
  onSubmit() {
    if (this.imgData.image && !this.imgData.isUploaded) {
      this.getImageUploadUrl(this.localImage).subscribe()
    } else {
      this.profileService.profileUpdate(this.editProfile.myForm.value).subscribe()
    }
  }
  getImageUploadUrl(file: any) {
    let config = {
      url: API_CONSTANTS.GET_IMAGE_UPLOAD_URL + file.name
    }
    return this.apiService.get(config).pipe(
      map((result: any) => {
        this.upload(file, result.result).subscribe((result) => {
          console.log(result)
        })
      }))

  }
  upload(file: any, path: any) {
    var options = {
      fileKey: file.name,
      fileName: file.name,
      chunkedMode: false,
      mimeType: 'image/png',
      headers: new HttpHeaders({
        "Content-Type": "multipart/form-data",
        "x-ms-blob-type": (file.cloudStorage === "AZURE") ? "BlockBlob" : "",
      }),
      httpMethod: "PUT",
    }
    const imageForm = new FormData();
    imageForm.append('image', file);
    return this.http.post(path.signedUrl, imageForm);
  }

  ImageUploadEvent(event: any) {
    this.localImage = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (file: any) => {
      this.imgData.image = file.target.result
      this.imgData.isUploaded = false;
    }
  }

  preFillData(existingData: any) {
    for (let i = 0; i < this.formData.controls.length; i++) {
      this.formData.controls[i].value = existingData[this.formData.controls[i].name];
      this.formData.controls[i].options = _.unionBy(this.formData.controls[i].options, this.formData.controls[i].value, 'value');
    }
    this.showForm = true;
  }
}
