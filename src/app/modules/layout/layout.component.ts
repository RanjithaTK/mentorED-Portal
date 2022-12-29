import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  options=[{label:"English",value:"en"},{label:"Hindi",value:"hi"}]
  selectedLanguage="en"
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
   }

   onLogout(){
    this.authService.logoutAccount()
  }
}
