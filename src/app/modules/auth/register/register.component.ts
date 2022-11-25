import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { createSecureServer } from 'http2';
import * as _ from 'lodash';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { DynamicFormComponent } from 'src/app/shared/components';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('signup') signup: DynamicFormComponent;
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
        errorMessage:'Enter your full name',
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
        errorMessage:'Please enter valid email ID',
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
        name: 'cPassword',
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
  secretCodeControl = {
    name: 'secretCode',
    label: 'Secret code',
    value: '',
    placeHolder: 'Secret code',
    type: 'secretCode',
    errorMessage:'Please enter secret code',
    validators: {
      required: true,
    },
  };
  selectedRole: any;
  isAMentor: boolean;
  secretCode: string = "";

  constructor(
    private routerParms: ActivatedRoute,
    private authService: AuthService,
    private Router: Router) { 
    routerParms.queryParams.subscribe(data =>{
      this.selectedRole = data['selectedRole'];
      if(this.selectedRole == "Mentor"){
        this.formData.controls.push(this.secretCodeControl);
        this.isAMentor = true;
      }
    })
  }

  ngOnInit(): void {
  }
  onSignUp(){
    this.authService.createAccount(this.signup.myForm.value);
    this.createUser();
  }
  async createUser(){
    let formJson = this.signup.myForm.value;
    formJson.isAMentor = this.isAMentor ? this.isAMentor : false;
    if(_.isEqual(formJson.password,formJson.cPassword)){
      this.Router.navigate(['./auth/otp'])
    }
  }

}
