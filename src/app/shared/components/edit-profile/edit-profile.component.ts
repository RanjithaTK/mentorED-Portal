import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { API_CONSTANTS } from 'src/app/core/constants/apiUrlConstants';
import { ApiService } from 'src/app/core/services';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  formData: any;
  EDIT_PROFILE_FORM = {
    type: "session",
    subType: "sessionForm",
    action: "sessionFields",
    templateName: "defaultTemplate"
  };
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.getFormFromServer(
      this.EDIT_PROFILE_FORM
    ).subscribe((formData)=>{
      this.formData=formData
      console.log(formData)
    })
  }
 

  // Getting form from api
  getFormFromServer(formBody: any) {
    const config = {
      url: API_CONSTANTS.FORM_READ,
      payload: formBody,
    };
    return this.apiService.post(config).pipe(
      map((result: any) => {
        console.log(result.meta.formsVersion)
        // let formData = _.pick(result, 'meta.formsVersion', 'result.data.fields.controls')
        return result.result.data.fields;
      })
    )
  }











}
