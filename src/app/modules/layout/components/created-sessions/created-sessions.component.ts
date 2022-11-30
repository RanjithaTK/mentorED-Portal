import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services';
import { API_CONSTANTS } from 'src/app/core/constants/apiUrlConstants'


@Component({
  selector: 'app-created-sessions',
  templateUrl: './created-sessions.component.html',
  styleUrls: ['./created-sessions.component.scss']
})
export class CreatedSessionsComponent implements OnInit {
  noData: any = { "content": "Share what you know with the community!" }
  start: any = 0;
  lastIndexUpcomingSessions: any = 2;
  lastIndexPastSessions: any = 2;
  upcomingCardDetails: any;
  pastCardDetails: any;
  page: any = 1;
  limit: any = 4;
  status: any = "completed"
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    let user: any = localStorage.getItem('user')
    let id = JSON.parse(user)
    this.getUpcomingSessions(id._id);
    this.getpastSessions();

  }

  onClickViewMoreUpcomingSessions() {

    this.lastIndexUpcomingSessions = this.upcomingCardDetails.length
  }
  onClickViewMorePastSessions() {
    this.lastIndexPastSessions = this.pastCardDetails.length
  }

  getUpcomingSessions(id: any) {
    const config = {
      url: API_CONSTANTS.UPCOMING_SESSIONS + id + "?page=1&limit=100",
      payload: {}
    };
    this.apiService.get(config).subscribe((data: any) => {
      this.upcomingCardDetails = data.result[0].data
    })

  }

  getpastSessions() {
    const config = {
      url: API_CONSTANTS.GET_SESSIONS_LIST + this.status + "?page=1&limit=100",
      payload: {}
    };
    this.apiService.get(config).subscribe((data: any) => {
      this.pastCardDetails = data.result.data
    })
  }

}
