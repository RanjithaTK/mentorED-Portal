import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from 'rxjs/operators';

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class AuthComponent implements OnInit {
  header: any;
  subHeader: any;

  constructor(private router: Router, private location: Location) {
    router.events.pipe(
      filter((event:any) => event instanceof NavigationEnd)
    ).subscribe(data=>{
      let key = data.url.split('?')[0].split('/').pop()
      switch (key) {
        case 'login':
          this.header = "LOGIN_HEADER"
          this.subHeader = "LOGIN_SUB_HEADER"
          break;
        case 'register':
          this.header = "SIGNUP_HEADER"
          this.subHeader = "SIGNUP_SUB_HEADER"
          break;
        case 'role-selection':
          this.header = "CHOOSE_YOUR_ROLE"
          this.subHeader = "JOIN_THE_COMMUNITY"
          break;
        case 'otp':
          this.header = "VERIFY_ACCOUNT"
          this.subHeader = "OTP_SUB_TEXT"
          break;

        default:
          break;
      }
    })
  }

  ngOnInit(): void {}
}
