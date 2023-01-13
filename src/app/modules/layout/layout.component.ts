import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Profiler } from 'inspector';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ProfileService } from 'src/app/core/services/profile/profile.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  options=[{label:"English",value:"en"},{label:"Hindi",value:"hi"}]
  selectedLanguage="en"
  constructor(private authService: AuthService,private profileService:ProfileService,private router: Router) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
   }

   onLogout(){
    this.router.navigate(['/logout']);
  }

  goToProfile() {
    this.getDetails().then((userDetails)=>{
      if(userDetails.about){
        this.router.navigate(['/profile']);
      }else{
         this.router.navigate(['/edit-profile'])
      }
    })
  }
  async getDetails() {
    return await this.profileService.profileDetails()
  }
}
