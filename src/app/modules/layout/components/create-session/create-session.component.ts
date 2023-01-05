import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import { map, Observable } from 'rxjs';
import { API_CONSTANTS } from 'src/app/core/constants/apiUrlConstants';
import { CREATE_SESSION_FORM } from 'src/app/core/constants/formConstant';
import { CanLeave } from '../../../../core/interfaces/canLeave';
import { ApiService } from 'src/app/core/services';
import { FormService } from 'src/app/core/services/form/form.service';
import { SessionService } from 'src/app/core/services/session/session.service';
import { DynamicFormComponent } from 'src/app/shared';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.scss']
})
export class CreateSessionComponent implements OnInit,CanLeave {
  @ViewChild('createSession') createSession: DynamicFormComponent;
  imgData = {
    type: 'session',
    image: '',
    isUploaded: true
  }
  defaultImageArray = []
  formData: any;
  localImage: any;
  isSaved:any = false;
  constructor(private form: FormService, private apiService: ApiService, private http: HttpClient, private sessionService: SessionService, private location: Location) { }
  @HostListener('window:beforeunload')
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
     if (!this.isSaved && this.createSession.myForm.dirty) {
       return false;
     } else {
       return true;
     }
   }
  ngOnInit(): void {
    this.form.getForm(CREATE_SESSION_FORM).subscribe((form)=>{
      this.formData = form;
    })
  }

  imageEvent(event: any) {
    if(event){
      this.localImage = event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (file: any) => {
        this.imgData.image = file.target.result
        this.imgData.isUploaded = false;
      }
    } else {
      this.localImage = this.imgData.image = '';
      this.imgData.isUploaded = true;
    }
  }

  onSubmit() {
    this.isSaved = true;
    if (this.createSession.myForm.valid) {
      if (this.imgData.image && !this.imgData.isUploaded) {
        this.getImageUploadUrl(this.localImage).subscribe()
      } else {
        const form = Object.assign({}, this.createSession.myForm.value);
        form.startDate = new Date(form.startDate).getTime() / 1000.0;
        form.endDate = new Date(form.endDate).getTime() / 1000.0;
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        form.timeZone = timezone;
        this.createSession.myForm.markAsPristine();
        this.sessionService.createSession(form).subscribe((result)=>{
          this.location.back();
        });
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
          this.createSession.myForm.value.append('image', result.result.signedUrl)
          this.onSubmit();
        })
      }))
  }
  upload(file: any, path: any) {
    const imageForm = new FormData();
    imageForm.append('image', file);
    return this.http.put(path.signedUrl, imageForm);
  }
}
