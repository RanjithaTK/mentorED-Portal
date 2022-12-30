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
  page: any = 1;
  limit: any = 4;
  status: any = "completed";
  loading: boolean = false;
  userDetails: any;
  showLoadMoreButton: boolean = false;

  constructor(private apiService: ApiService, private sessionService: SessionService, private localStorage: LocalStorageService, private router: Router) { }
  async ngOnInit(): Promise<void> {
    this.userDetails = JSON.parse(
      await this.localStorage.getLocalData(localKeys.USER_DETAILS),
    )

    let user: any = localStorage.getItem('user')
    user = JSON.parse(user)
    this.getUpcomingSessions(user._id).subscribe()
    this.getPastSessions()
  }

  onClickViewMoreUpcomingSessions() {
    this.page = this.page + 1
    this.getUpcomingSessions(this.userDetails._id).subscribe()
  }
  onClickViewMorePastSessions() {
    this.page = this.page + 1
    this.getPastSessions()
  }

  getUpcomingSessions(id: any) {
    const config = {
      url:
        API_CONSTANTS.UPCOMING_SESSIONS +
        id +
        '?page=' +
        this.page +
        '&limit=' +
        this.limit,
      payload: {},
    }
    this.loading = true
    return this.apiService.get(config).pipe(
      map((data: any) => {
        this.loading = false
        this.upcomingCardDetails = this.upcomingCardDetails.concat(data.result[0].data)
        this.showLoadMoreButton = data.result.count == this.upcomingCardDetails.length ? false : true;
        return data
      }),
    )
  }

  getPastSessions() {
    let obj ={
      page:this.page,
      limit:this.limit,
      status:this.status
    }
    this.loading = true
    this.sessionService.pastSession(obj).subscribe((data:any)=>{
      this.loading = false
      this.pastCardDetails = this.pastCardDetails.concat(data.result.data)
      this.showLoadMoreButton = data.result.count == this.pastCardDetails.length ? false : true
    })
    
  }

  createSession() {
    this.router.navigate(['/create-session'])
  }

}
