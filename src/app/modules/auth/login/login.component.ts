import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { API_CONSTANTS } from 'src/app/core/constants/apiUrlConstants';
import { ApiService } from 'src/app/core/services';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { DynamicFormComponent } from 'src/app/shared/components';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm: DynamicFormComponent;
  formData = {
    controls: [
      // {
      //   name: 'name',
      //   label: 'Name',
      //   value: '',
      //   class: 'ion-margin',
      //   type: 'text',
      //   position: 'floating',
      //   errorMessage:'This field can only contain alphabets',
      //   validators: {
      //     required: true,
      //     pattern:'^[a-zA-Z ]*$',
      //   },
      // },
      {
        name: 'email',
        label: 'Email ID',
        value: '',
        type: 'email',
        errorMessage:'Please enter registered email ID',
        validators: {
          required: true,
          pattern: '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'
        },
      },
      {
        name: 'password',
        label: 'Password',
        value: '',
        type: 'password',
        errorMessage:'Please enter password',
        validators: {
          required: true
        },
      },
      // {
      //   name: 'number',
      //   label: 'Number',
      //   value: '',
      //   class: 'ion-margin',
      //   type: 'number',
      //   position: 'floating',
      //   errorMessage:'This field can only contain alphabets',
      //   validators: {
      //     required: true,
      //     pattern:'^[a-zA-Z ]*$',
      //   },
      // },

      // {
      //   name: 'dob',
      //   label: 'DOB',
      //   value: '',
      //   class: 'ion-margin',
      //   type: 'date',
      //   position: 'floating',
      //   errorMessage:'This field can only contain alphabets',
      //   validators: {
      //     required: true,
      //     pattern:'^[a-zA-Z ]*$',
      //   },
      // },
      // {
      //   name: 'time',
      //   label: 'Time',
      //   value: '',
      //   class: 'ion-margin',
      //   type: 'time',
      //   position: 'floating',
      //   errorMessage:'This field can only contain alphabets',
      //   validators: {
      //     required: true,
      //     pattern:'^[a-zA-Z ]*$',
      //   },
      // }
      
    ],
  };

  constructor(
    private authService: AuthService,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    this.authService.loginAccount(this.loginForm.myForm.value)
  }

}
