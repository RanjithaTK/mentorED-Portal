import { Component, Input, OnInit } from "@angular/core";
import * as _ from "lodash";
import { SessionService } from "src/app/core/services/session/session.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-session-detail",
  templateUrl: "./session-detail.component.html",
  styleUrls: ["./session-detail.component.scss"],
})
export class SessionDetailComponent implements OnInit {
  cardData: any;

  layout = "center center";

  details = {
    buttonLabel: "Enroll",
    form: [
      {
        title: "DESCRIPTION",
        key: "description",
      },
      {
        title: "CATEGORIES",
        key: "categories",
      },
      {
        title: "MEDIUM",
        key: "medium",
      },
    ],
    data: {
      image: [],
      description: "",
      recommendedFor: [
        {
          value: "Teachers",
          label: "Teachers",
        },
        {
          value: "Block Officers",
          label: "Block Officers",
        },
      ],
      medium: [
        {
          value: "English",
          label: "English",
        },
        {
          value: "Hindi",
          label: "Hindi",
        },
      ],
      categories: [
        {
          value: "Educational Leadership",
          label: "Educational Leadership",
        },
        {
          value: "School Process",
          label: "School Process",
        },
        {
          value: "Communication",
          label: "Communication",
        },
        {
          value: "SQAA",
          label: "SQAA",
        },
        {
          value: "Professional Development",
          label: "Professional Development",
        },
      ],
      mentorName: null,
      status: null,
      isEnrolled: null,
      title: "",
      startDate: "",
    },
  };
  id: any;

  constructor(
    private router: Router,
    private sessionService: SessionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.id = params["id"];
    });
    this.sessionService.getSessionDetailsAPI(this.id).subscribe((data: any) => {
      console.log(" data :", data);
    });
  }
}
