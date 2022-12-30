import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core'
import { MatDialog } from '@angular/material/dialog';
import { CanDeactivate } from '@angular/router';
import * as _ from 'lodash';
import { map } from 'rxjs';
import { API_CONSTANTS } from 'src/app/core/constants/apiUrlConstants';
import { EDIT_PROFILE_FORM } from 'src/app/core/constants/formConstant';
import { localKeys } from 'src/app/core/constants/localStorage.keys';
import { CanComponentDeactivate } from 'src/app/core/guards/can-deactivate.guard';
import { ApiService } from 'src/app/core/services';
import { FormService } from 'src/app/core/services/form/form.service';
import { LocalStorageService } from 'src/app/core/services/local-storage/local-storage.service';
import { ProfileService } from 'src/app/core/services/profile/profile.service';
import { DynamicFormComponent, DynamicFormData } from 'src/app/shared';
import { ExitPopupComponent } from 'src/app/shared/components/exit-popup/exit-popup.component';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit,CanComponentDeactivate{
  private win: any = window;
  @ViewChild('editProfile') editProfile: DynamicFormComponent;
  imgData = {
    type: 'profile',
    image: '',
    isUploaded: true
  }
  path: any;
  localImage: any;
  public formData: any;
  showForm: any = false;
  type = 'profile'

  constructor(private formService: FormService, private profileService: ProfileService, private localStorage: LocalStorageService, private apiService: ApiService, private http: HttpClient, private dialog: MatDialog, private location: Location) {
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
  @HostListener('window:beforeunload', ['$event'])
   onWindowClose(event: any): void {
   console.log(this.editProfile.myForm.value)
    console.log(this.editProfile.myForm.dirty)
    this.canDeactivate()
      // if (this.editProfile.myForm.dirty) {
      //   event.preventDefault();
      //  event.returnValue = false;
      // }else{
      //   event.returnValue = true;
      // }
  }
  onSubmit() {
    if (this.editProfile.myForm.valid) {
      if (this.imgData.image && !this.imgData.isUploaded) {
        this.getImageUploadUrl(this.localImage).subscribe()
      } else {
        this.profileService.profileUpdate(this.editProfile.myForm.value).subscribe();
      }
    }
  }
  getImageUploadUrl(file: any) {
    let config = {
      url: API_CONSTANTS.GET_IMAGE_UPLOAD_URL + file.name
    }
    return this.apiService.get(config).pipe(
      map((result: any) => {
        return this.upload(file, result.result).subscribe(() => {
          this.imgData.isUploaded = true;
          this.editProfile.myForm.value.append('image', result.result.signedUrl)
          this.onSubmit();
        })
      }))
  }

 
  upload(file: any, path: any) {
    const imageForm = new FormData();
    imageForm.append('image', file);
    return this.http.put(path.signedUrl, imageForm);
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
  canDeactivate() {
    console.log(this.editProfile.myForm.value)
    console.log(this.editProfile.myForm.dirty)
    // const confirmResult = this.dialog.open(ExitPopupComponent,{})
    const confirmResult = confirm('Are you sure you want to leave this page ? ');
      if (this.editProfile.myForm.dirty) {
        return false;
      } else {
        return true;
    }
  }
  preFillData(existingData: any) {
    this.imgData.image = (existingData['image']) ? existingData['image'] : '';
    for (let i = 0; i < this.formData.controls.length; i++) {
      this.formData.controls[i].value = existingData[this.formData.controls[i].name];
      this.formData.controls[i].options = _.unionBy(this.formData.controls[i].options, this.formData.controls[i].value, 'value');
    }
    this.showForm = true;
  }
}
