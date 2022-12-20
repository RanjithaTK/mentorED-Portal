import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services';
import { API_CONSTANTS } from 'src/app/core/constants/apiUrlConstants'
import { SessionService } from 'src/app/core/services/session/session.service';
import { localKeys } from 'src/app/core/constants/localStorage.keys';
import { LocalStorageService } from 'src/app/core/services/local-storage/local-storage.service';


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
  noData: any="NO_ALL_SESSION_CONTENT"
  loading: boolean = false;
  userDetails: any;

  constructor(private router: Router, private apiService: ApiService,private sessionService: SessionService,private localStorage:LocalStorageService) {
    this.selectedPage = router.url

  }

  async ngOnInit(){
    this.userDetails= JSON.parse( await this.localStorage.getLocalData(localKeys.USER_DETAILS))
    this.cardHeading = (this.selectedPage == '/enrolled-sessions') ? "MY_SESSIONS" : "ALL_SESSIONS";
    this.getAllSession();
  }

  onClickViewMore() {
    this.lastIndex = this.cardDetails.length
  }
  getAllSession() {
    let config = {
      url: API_CONSTANTS.HOME_SESSION + this?.page + '&limit=' + this?.limit
    };
    this.loading = true;
    this.apiService.get(config).subscribe((data: any) => {
      this.loading = false;
      this.cardDetails = (this.selectedPage == '/enrolled-sessions') ? data.result.mySessions : data.result.allSessions;
      if (!this.cardDetails.length) {
        this.noData = (this.selectedPage == '/enrolled-sessions') ? "NO_ENROLL_SESSION_CONTENT"  : "NO_ALL_SESSION_CONTENT";
      }
    }, error => {
      this.loading = false;
    })

  }
  buttonClick(event:any){
    switch(event.action.type){
      case "enrollAction":
        this.sessionService.enrollSession(event.data._id).subscribe((result)=>{
          this.getAllSession()
        }
        )
        break
      case "joinAction":
        this.sessionService.joinSession(event.data._id).subscribe((result)=>{
        })
        break
    }
  }

}
