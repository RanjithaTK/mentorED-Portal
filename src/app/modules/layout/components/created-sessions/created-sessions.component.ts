import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services';
import { API_CONSTANTS } from 'src/app/core/constants/apiUrlConstants'
import { map } from 'rxjs';
import { Router } from '@angular/router';
import { localKeys } from 'src/app/core/constants/localStorage.keys';
import { LocalStorageService } from 'src/app/core/services/local-storage/local-storage.service';
import { SessionService } from 'src/app/core/services/session/session.service';

interface item {
  userId?: string;
}

@Component({
  selector: 'app-created-sessions',
  templateUrl: './created-sessions.component.html',
  styleUrls: ['./created-sessions.component.scss']
})
export class CreatedSessionsComponent implements OnInit {
  noData: any = "NO_CREATED_SESSION_CONTENT"
  start: any = 0;
  lastIndexUpcomingSessions: any = 2;
  lastIndexPastSessions: any = 2;
  upcomingCardDetails: Array<item> = [];
  pastCardDetails: Array<item> = [];
  pagePast: any = 1;
  pageUpcoming:any =1
  limit: any = 2;
  status: any = "completed";
  loading: boolean = false;
  userDetails: any;
  showLoadMoreButtonPastSession: boolean = false;
  showLoadMoreButtonUpcomingSession: boolean = false;
  buttonContent:any = 'LIVE';
  constructor(private apiService: ApiService, private sessionService: SessionService, private localStorage: LocalStorageService, private router: Router) { }
  async ngOnInit(): Promise<void> {
    this.userDetails = JSON.parse(
      await this.localStorage.getLocalData(localKeys.USER_DETAILS),
    )

    let user: any = localStorage.getItem('user')
    user = JSON.parse(user)
    this.getUpcomingSessions(user._id)
    this.getPastSessions()
  }

  onClickViewMoreUpcomingSessions() {
    this.pageUpcoming = this.pageUpcoming + 1
    this.getUpcomingSessions(this.userDetails._id)
  }
  onClickViewMorePastSessions() {
    this.pagePast = this.pagePast + 1
    this.getPastSessions()
  }

  getUpcomingSessions(id: any) {
    let obj ={
      id:id,
      page:this.pageUpcoming,
      limit:this.limit,
      status:this.status
    }
    this.loading = true
    this.sessionService.upComingSession(obj).subscribe((data:any)=>{
      this.loading = false
        this.upcomingCardDetails = this.upcomingCardDetails.concat(data.result[0].data)
        this.showLoadMoreButtonUpcomingSession = data.result[0].count == this.upcomingCardDetails.length ? false : true;
    })
  }

  getPastSessions() {
    let obj ={
      page:this.pagePast,
      limit:this.limit,
      status:this.status
    }
    this.loading = true
    this.sessionService.pastSession(obj).subscribe((data:any)=>{
      this.loading = false
      this.pastCardDetails = this.pastCardDetails.concat(data.result.data)
      this.showLoadMoreButtonPastSession = data.result.count == this.pastCardDetails.length ? false : true
    })
    
  }

  createSession() {
    this.router.navigate(['/create-session'])
  }

}
