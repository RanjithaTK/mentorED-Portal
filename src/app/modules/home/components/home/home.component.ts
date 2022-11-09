import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cardDetails = [{
    'image': 'https://webkit.org/demos/srcset/image-src.png',
    'title':'How to conduct micro improvement project',
    'mentor_Name':'Mentor1 Name',
    'session_date':'11/08/2022',
    'session_time': '08.00 PM',
    'session_state':'enroll'
  },{
    'image': 'https://webkit.org/demos/srcset/image-src.png',
    'title':'How to conduct micro improvement',
    'mentor_Name':'Mentor2 Name',
    'session_date':'11/08/2022',
    'session_time': '08.00 PM',
    'session_state':'enroll'
  },{
    'image': 'https://webkit.org/demos/srcset/image-src.png',
    'title':'How to conduct micro improvement project',
    'mentor_Name':'Mentor3 Name',
    'session_date':'11/08/2022',
    'session_time': '08.00 PM',
    'session_state':'enroll'
  },{
    'image': 'https://webkit.org/demos/srcset/image-src.png',
    'title':'How to conduct micro improvement project',
    'mentor_Name':'Mentor4 Name',
    'session_date':'11/08/2022',
    'session_time': '08.00 PM',
    'session_state':'enroll'
  },{
    'image': 'https://webkit.org/demos/srcset/image-src.png',
    'title':'How to conduct micro improvement project',
    'mentor_Name':'Mentor5 Name',
    'session_date':'11/08/2022',
    'session_time': '08.00 PM',
    'session_state':'enroll'
  },{
    'image': 'https://webkit.org/demos/srcset/image-src.png',
    'title':'How to conduct micro improvement project',
    'mentor_Name':'Mentor6 Name',
    'session_date':'11/08/2022',
    'session_time': '08.00 PM',
    'session_state':'enroll'
  },{
    'image': 'https://webkit.org/demos/srcset/image-src.png',
    'title':'How to conduct micro improvement project',
    'mentor_Name':'Mentor6 Name',
    'session_date':'11/08/2022',
    'session_time': '08.00 PM',
    'session_state':'enroll'
  },{
    'image': 'https://webkit.org/demos/srcset/image-src.png',
    'title':'How to conduct micro improvement project',
    'mentor_Name':'Mentor6 Name',
    'session_date':'11/08/2022',
    'session_time': '08.00 PM',
    'session_state':'enroll'
  },{
    'image': 'https://webkit.org/demos/srcset/image-src.png',
    'title':'How to conduct micro improvement project',
    'mentor_Name':'Mentor6 Name',
    'session_date':'11/08/2022',
    'session_time': '08.00 PM',
    'session_state':'enroll'
  },{
    'image': 'https://webkit.org/demos/srcset/image-src.png',
    'title':'How to conduct micro improvement project',
    'mentor_Name':'Mentor6 Name',
    'session_date':'11/08/2022',
    'session_time': '08.00 PM',
    'session_state':'enroll'
  }]

  last:any = 4;
  view: any = "View More"
  constructor() { }

  ngOnInit(): void {
    this.getCardDetails();
  }
  getCardDetails(){
  
  }

  onClickViewMore(){
    // if(this.view =="View Less" ){
    //   this.last = 4;
    // this.view = "View More"
    // }
    // else{
      this.last = this.cardDetails.length;
      // this.view = "View Less"
    // }
    
  }
}
