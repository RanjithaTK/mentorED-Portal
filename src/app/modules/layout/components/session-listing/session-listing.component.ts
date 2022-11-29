import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/core/services';
import { API_CONSTANTS } from 'src/app/core/constants/apiUrlConstants'


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
  status: any = "allSessions"

  constructor(private router: Router, private apiService: ApiService) {
    this.selectedPage = router.url

  }

  ngOnInit(): void {
    
    if (this.selectedPage == '/enrolled-sessions') {
      this.cardHeading = "MY_SESSIONS"
      this.status = "enrolled-sessions";
    } else {
      this.cardHeading = "ALL_SESSIONS"
      this.status = "all-sessions";
    }
    this.getAllSession();
  }

  onClickViewMore() {
    this.lastIndex = this.cardDetails.length
  }
  getAllSession() {
    let config = {
      url: API_CONSTANTS.HOME_SESSION + this?.page + '&limit=' + this?.limit,
      payload: {}
    };

    this.apiService.get(config).subscribe((data: any) => {
      this.cardDetails = (this.status == "enrolled-sessions") ? data.result.mySessions : data.result.allSessions;

    })

  }

}
