import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {

  checked = false;
  timeLimit=60;
  formData = {
    controls: [
      {
        name: 'otp',
        label: 'OTP',
        value: '',
        type: 'tel',
        placeHolder: 'Enter OTP',
        errorMessage:'Please enter the OTP',
        validators: {
          required: true,
        }
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

  resendOTP(){
    
  }

}
