import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {

  formData = {
    controls: [
      {
        name: 'otp',
        label: 'OTP',
        value: '',
        type: 'number',
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

}
