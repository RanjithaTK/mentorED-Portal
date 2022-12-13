import { Injectable } from '@angular/core';
import { API_CONSTANTS } from '../../constants/apiUrlConstants';
import { ApiService } from '../api/api.service';
import { map } from 'rxjs';
import { DbService } from '../db/db.service';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  formVersions=[];

  constructor(private apiService: ApiService, private dbService: DbService) { }

  // Checking form in local
  getForm = (formBody: any) => {
    return this.dbService.getById('forms', formBody.type).pipe(
      map((form: any) => {
        if (form) {
          return form.controls;
        } else {
          this.getFormFromServer(formBody).subscribe((form)=>{
            if(form){
              this.addFormToLocal(formBody.type,form)
            }
          })
        }
      })
    )
  }

  // Getting form from api
  getFormFromServer(formBody: any){
    const config = {
      url: API_CONSTANTS.FORM_READ,
      payload: formBody,
    };
    return this.apiService.post(config).pipe(
      map((result:any) => {
        return result.result.data.fields.controls;
      })
    )
  }

  // Storing form in local
  addFormToLocal(id:string,controls:any) {
    return this.dbService.add('forms',id,controls).subscribe((form)=>{
      return form
    })
  }
}
