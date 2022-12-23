import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/core/services/profile/profile.service'

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  details: any = {
    buttonLabel: "EDIT_PROFILE",
    form: [
      {
        title: 'ABOUT',
        key: 'about',
      },
      {
        title: 'DESIGNATION',
        key: 'designation',
      },
      {
        title: 'YEAR_OF_EXPERIENCE',
        key: 'experience',
      },
      {
        title: "KEY_AREAS_OF_EXPERTISE",
        key: "areasOfExpertise"
      },
      {
        title: "EDUCATION_QUALIFICATION",
        key: "educationQualification"
      }
    ],
    menteeForm: ['SESSIONS_ATTENDED'],
    data: {},
  };

  constructor(private profileService: ProfileService,private router: Router) { }

  ngOnInit(): void {
    this.getDetails()
  }
  async getDetails() {
    let userDetails = await this.profileService.profileDetails()
    if(!userDetails.about){
      this.router.navigate(['/edit-profile'])
    }else{
      this.details.data = userDetails;
    }
  }
}
