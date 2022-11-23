import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formData = {
    controls: [
      {
        name: 'name',
        label: 'Name',
        value: '',
        class: 'ion-margin',
        type: 'text',
        placeHolder: 'Enter full name',
        position: 'floating',
        errorMessage:'This field can only contain alphabets',
        validators: {
          required: true,
          pattern:'^[a-zA-Z ]*$',
        },
      },
      {
        name: 'email',
        label: 'Email ID',
        value: '',
        placeHolder: 'yourname@gmail.com',
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
        placeHolder: 'Enter password',
        type: 'password',
        errorMessage:'Please enter password',
        validators: {
          required: true
        },
      },
      {
        name: 'confirm password',
        label: 'Confirm Password',
        value: '',
        placeHolder: 'Enter password again',
        type: 'password',
        errorMessage:'Please enter password',
        validators: {
          required: true
        },
      },
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
