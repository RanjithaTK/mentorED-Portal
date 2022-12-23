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
  upcomingCardDetails: Array<item>;
  pastCardDetails: Array<item>;
  page: any = 1;
  limit: any = 4;
  status: any = "completed";
  loading: boolean = false;
  userDetails: any;

  constructor(private apiService: ApiService,private sessionService: SessionService,private localStorage:LocalStorageService,  private router: Router) { }
  async ngOnInit(): Promise<void> {
    this.userDetails= JSON.parse( await this.localStorage.getLocalData(localKeys.USER_DETAILS))

    let user: any = localStorage.getItem('user')
    user = JSON.parse(user)
    this.getUpcomingSessions(user._id).subscribe((upcomingSessions)=>{
      this.upcomingCardDetails = upcomingSessions
    })
    this.getPastSessions().subscribe((pastSessions)=>{
      this.pastCardDetails = pastSessions
    })

  }

  onClickViewMoreUpcomingSessions() {

    this.lastIndexUpcomingSessions = this.upcomingCardDetails.length
  }
  onClickViewMorePastSessions() {
    this.lastIndexPastSessions = this.pastCardDetails.length
  }

  getUpcomingSessions(id: any) {
    const config = {
      url: API_CONSTANTS.UPCOMING_SESSIONS + id+"?page=1&limit=100" ,
      payload: {}
    };
    this.loading = true;
    return this.apiService.get(config).pipe(
      map((data: any) => {
        this.loading = false;
        return (data.result && data.result.length) ? data.result[0].data : [];
      })
    )
  }

  getPastSessions() {
    const config = {
      url: API_CONSTANTS.GET_SESSIONS_LIST + "1&limit=100&status=" + this.status,
      payload: {}
    };
    this.loading = true;
    return this.apiService.get(config).pipe(
      map((data: any) => {
        this.loading = false;
        return data.result.data
      })
    )
  }

  createSession() {
    this.router.navigate(['/create-session'])
  }

}
