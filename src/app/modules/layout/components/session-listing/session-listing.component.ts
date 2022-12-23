import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services';
import { API_CONSTANTS } from 'src/app/core/constants/apiUrlConstants'
import { FormService } from 'src/app/core/services/form/form.service';
import { CREATE_SESSION_FORM, EDIT_PROFILE_FORM, FAQ, HELP_VIDEOS, TERMS_AND_CONDITIONS_FORM } from 'src/app/core/constants/formConstant';
import { map } from 'rxjs';
import { DbService } from 'src/app/core/services/db/db.service';


@Component({
  selector: 'app-session-listing',
  templateUrl: './session-listing.component.html',
  styleUrls: ['./session-listing.component.scss']
})
export class SessionListingComponent implements OnInit {
  cardHeading: any;
  cardDetails: any;
  mySessions: any;
  allSessions: any;
  start: any = 0;
  lastIndex: any = 4;
  selectedPage: any;
  page: any = 1;
  limit: any = 4;
  noData: any = "NO_ALL_SESSION_CONTENT"
  loading: boolean = false;
  constructor(private router: Router, private apiService: ApiService, private form: FormService) {
    this.selectedPage = router.url

  }

  ngOnInit(): void {
    
    this.cardHeading = (this.selectedPage == '/enrolled-sessions') ? "MY_SESSIONS" : "ALL_SESSIONS";
    this.getAllSession().subscribe((sessions)=>{
      this.cardDetails = sessions;
    })
  }

  onClickViewMore() {
    this.lastIndex = this.cardDetails.length
  }
  getAllSession() {
    let config = {
      url: API_CONSTANTS.HOME_SESSION + this?.page + '&limit=' + this?.limit
    };
    this.loading = true;
    return this.apiService.get(config).pipe(
      map(((data: any) => {
        this.loading = false;
        return (this.selectedPage == '/enrolled-sessions') ? data.result.mySessions : data.result.allSessions;
      }))
    )
  }

}
