import { Component, OnInit, ViewChild } from '@angular/core';
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
      {
        name: 'name',
        label: 'Name',
        value: '',
        class: 'ion-margin',
        type: 'text',
        position: 'floating',
        errorMessage:'This field can only contain alphabets',
        validators: {
          required: true,
          pattern:'^[a-zA-Z ]*$',
        },
      },
      // {
      //   name: 'Email',
      //   label: 'Email',
      //   value: '',
      //   class: 'ion-margin',
      //   type: 'email',
      //   position: 'floating',
      //   errorMessage:'This field can only contain alphabets',
      //   validators: {
      //     required: true,
      //     pattern:'^[a-zA-Z ]*$',
      //   },
      // },
      {
        name: 'password',
        label: 'Password',
        value: '',
        class: 'ion-margin',
        type: 'password',
        position: 'floating',
        errorMessage:'This field can only contain alphabets',
        validators: {
          required: true,
          pattern:'',
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

  constructor() { }

  ngOnInit(): void {
  }

}
