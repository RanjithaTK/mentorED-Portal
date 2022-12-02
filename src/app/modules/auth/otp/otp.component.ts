import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { LocalStorageService } from 'src/app/core/services/local-storage/local-storage.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  @ViewChild('otpForm', {static: false}) otpFormRef: any;

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

  constructor(
    private authService: AuthService,
    private router: Router,
    private localStorage: LocalStorageService
  ) { 
    
  }

  ngOnInit(): void {
  }

  resendOTP(){
    
  }
  async onSubmit(){
    console.log(this.otpFormRef.myForm.value);
    this.router.navigate(['/home'])
  }

}
