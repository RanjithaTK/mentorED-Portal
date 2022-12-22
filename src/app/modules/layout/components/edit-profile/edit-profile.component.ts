import { Component, OnInit } from '@angular/core'
import { EDIT_PROFILE_FORM } from 'src/app/core/constants/formConstant';
import { FormService } from 'src/app/core/services/form/form.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  formData: any;
  

  constructor(private formService:FormService) {}

  ngOnInit(): void {
    this.formService.getForm(EDIT_PROFILE_FORM).subscribe((form)=>{
        this.formData=form
    })
  }
}
