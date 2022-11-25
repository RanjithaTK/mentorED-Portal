import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-created-sessions',
  templateUrl: './created-sessions.component.html',
  styleUrls: ['./created-sessions.component.scss']
})
export class CreatedSessionsComponent implements OnInit {
  noData: any = {"content": "Share what you know with the community!" }
  apiCardDetails = {
    "responseCode": "OK",
    "message": "Session fetched successfully.",
    "result": {
      "allSessions": [
        {
          "_id": "6347f6cce76c8b07b70a04d4",
          "title": "next year",
          "description": "Hi",
          "image": ['https://thumbs.dreamstime.com/b/sunrise-over-bangalore-beautiful-march-hebbal-neighborhood-india-65291184.jpg'],
          "userId": "6347ab4ec851615a26fbd281",
          "status": "start",
          "startDate": "1697286540",
          "endDate": "1697372940",
          "startDateUtc": "2023-10-14T12:29:00",
          "endDateUtc": "2023-10-15T12:29:00",
          "createdAt": "2022-10-13T11:30:20.024Z",
          "isEnrolled": false,
          "mentorName": "sessiont"
        },
        {
          "_id": "63312e1161c2f96cd63d58af",
          "title": "testing calendar ",
          "description": "hello",
          "image": ['https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'],
          "userId": "6328b26798ca7a1a398bf0d4",
          "status": "start",
          "startDate": "1674708120",
          "endDate": "1674794520",
          "startDateUtc": "2023-01-26T04:42:00",
          "endDateUtc": "2023-01-27T04:42:00",
          "createdAt": "2022-09-26T04:44:01.308Z",
          "isEnrolled": true,
          "mentorName": "bhavana"
        },
        {
          "_id": "62ebcb7d5f14aa4377b5f326",
          "title": "next year next to next year next year next to next year ",
          "description": "ok",
          "image": ['https://media.gettyimages.com/id/1246464390/photo/the-lovely-vidhan-soudha.jpg?s=612x612&w=gi&k=20&c=zXOBdw0y-O1QneoVc4YKKsV8nFkZVfWZVj4Nhs9pAQM='],
          "userId": "62ce6090b10ad6e9ec7ba9a7",
          "status": "published",
          "startDate": "1785850560",
          "endDate": "1785936960",
          "startDateUtc": "2026-08-04T13:36:00",
          "endDateUtc": "2026-08-05T13:36:00",
          "createdAt": "2022-08-04T13:37:01.026Z",
          "isEnrolled": false,
          "mentorName": "ziva k"
        },
        {
          "_id": "63312e1161c2f96cd63d58af",
          "title": "testing calendar ",
          "description": "hello",
          "image": [''],
          "userId": "6328b26798ca7a1a398bf0d4",
          "status": "published",
          "startDate": "1674708120",
          "endDate": "1674794520",
          "startDateUtc": "2023-01-26T04:42:00",
          "endDateUtc": "2023-01-27T04:42:00",
          "createdAt": "2022-09-26T04:44:01.308Z",
          "isEnrolled": true,
          "mentorName": "bhavana"
        },
        {
          "_id": "63312e1161c2f96cd63d58af",
          "title": "testing calendar ",
          "description": "hello",
          "image": ['https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8='],
          "userId": "6328b26798ca7a1a398bf0d4",
          "status": "published",
          "startDate": "1674708120",
          "endDate": "1674794520",
          "startDateUtc": "2023-01-26T04:42:00",
          "endDateUtc": "2023-01-27T04:42:00",
          "createdAt": "2022-09-26T04:44:01.308Z",
          "isEnrolled": true,
          "mentorName": "bhavana"
        },
        {
          "_id": "63312e1161c2f96cd63d58af",
          "title": "testing calendar ",
          "description": "hello",
          "image": ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz_Kk2A3YKdr9AjnDs3UaUXAPKnt9da8BwaaQQbIo&s'],
          "userId": "6328b26798ca7a1a398bf0d4",
          "status": "published",
          "startDate": "1674708120",
          "endDate": "1674794520",
          "startDateUtc": "2023-01-26T04:42:00",
          "endDateUtc": "2023-01-27T04:42:00",
          "createdAt": "2022-09-26T04:44:01.308Z",
          "isEnrolled": true,
          "mentorName": "bhavana"
        },
      ],
      "mySessions": [
        {
          "_id": "6346ac19368471b2bacd3286",
          "sessionId": "633eb0ef2b0ab8d73b95dc82",
          "title": "Latest 0000001",
          "userId": "6329384e315eeea0c61a9a5f",
          "description": "Ok",
          "startDate": "1670323200",
          "endDate": "1670326860",
          "endDateUtc": "2022-12-06T11:41:00",
          "status": "published",
          "image": [],
          "mentorName": "Anupama"
        },
        {
          "_id": "6368b3b07542efefedef40fe",
          "sessionId": "63312e1161c2f96cd63d58af",
          "title": "testing calendar ",
          "userId": "6328b26798ca7a1a398bf0d4",
          "description": "hello",
          "startDate": "1674708120",
          "endDate": "1674794520",
          "endDateUtc": "2023-01-27T04:42:00",
          "status": "published",
          "image": [''],
          "mentorName": "bhavana"
        }
      ]
    },
    "meta": {
      "type": "feedback",
      "data": [],
      "formsVersion": [
        {
          "_id": "61ee6045fc2b962cf281dd24",
          "type": "session",
          "__v": 14
        },
        {
          "_id": "61ee5dddfc2b962cf281dd18",
          "type": "profile",
          "__v": 0
        },
        {
          "_id": "61ee56ebfc2b962cf281dd01",
          "type": "termsAndConditions",
          "__v": 1
        },
        {
          "_id": "6324225d378c64e611fa4df5",
          "type": "faq",
          "__v": 2
        },
        {
          "_id": "632880e60666662cc7c3fff6",
          "type": "helpVideos",
          "__v": 3
        }
      ]
    }
  }
  start: any = 0;
  lastIndexUpcomingSessions: any = 2;
  lastIndexPastSessions: any = 2;
  cardDetails: any;
  constructor() { }

  ngOnInit(): void {
    this.cardDetails = this.apiCardDetails.result.allSessions
  }

  onClickViewMoreUpcomingSessions() {
    this.lastIndexUpcomingSessions = this.cardDetails.length
  }
  onClickViewMorePastSessions() {
    this.lastIndexPastSessions = this.cardDetails.length
  }

}
