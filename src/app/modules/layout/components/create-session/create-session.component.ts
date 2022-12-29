import { Component, Input, OnInit } from '@angular/core';
import { CREATE_SESSION_FORM, EDIT_PROFILE_FORM } from 'src/app/core/constants/formConstant';
import { DbService } from 'src/app/core/services/db/db.service';
import { FormService } from 'src/app/core/services/form/form.service';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.scss']
})
export class CreateSessionComponent implements OnInit {
  imgData = {
    type: 'session',
    image: ''
  }
  defaultImageArray = []
  formData: any;
  constructor(private form: FormService, private db: DbService) { }

  ngOnInit(): void {
    this.form.getForm(CREATE_SESSION_FORM).subscribe((form)=>{
      this.formData = form;
    })
  }

}
