import { Component, Input, OnInit } from "@angular/core";
import * as _ from "lodash";
import { SessionService } from "src/app/core/services/session/session.service";
import { ActivatedRoute, Router } from "@angular/router";
import * as moment from "moment";
import { Location } from "@angular/common";

@Component({
  selector: "app-session-detail",
  templateUrl: "./session-detail.component.html",
  styleUrls: ["./session-detail.component.scss"],
})
export class SessionDetailComponent implements OnInit {
  cardData: any;

  details = {
    buttonLabel: "Enroll",
    form: [
      {
        title: "RECOMENDED_FOR",
        key: "recommendedFor",
      },
      {
        title: "MEDIUM",
        key: "medium",
      },{
        title: "MENTOR_NAME",
        key: "mentorName",
      },
      {
        title: "SESSION_DATE",
        key: "startDate",
      },
      {
        title: "SESSION_TIME",
        key: "startTime",
      },
    ],
    data: {
      image: [],
      description: '',
      mentorName: null,
      status:null,
      isEnrolled:null,
      title:"",
      startDate:"",
      startTime: ""
    },
  };
  id: any;
  readableStartDate: any;
  startDate: any;
  endDate: any;
  layout = 'start start'
  title: any;

  constructor(
    private router: Router,
    private sessionService: SessionService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    if(!this.router.getCurrentNavigation()?.extras.state){
      this.location.back();
    }
    this.id = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
    this.sessionService.getSessionDetailsAPI(this.id.id).subscribe((response: any) => {
      this.details.form.unshift({
        title: response.title,
        key: 'description'
      })
      let readableStartDate = moment.unix(response.startDate).format("DD/MM/YYYY");
      let readableStartTime = moment.unix(response.startDate).format("hh:MM");
      this.details.data = Object.assign({}, response);
      this.details.data.startDate = readableStartDate
      this.details.data.startTime = readableStartTime
    });
    
  }
}
