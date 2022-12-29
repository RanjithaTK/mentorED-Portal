import { Location} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';
import { ProfileService } from 'src/app/core/services/profile/profile.service';



@Component({
  selector: 'app-page-navigator',
  templateUrl: './page-navigator.component.html',
  styleUrls: ['./page-navigator.component.scss']
})
export class PageNavigatorComponent implements OnInit {

  pageNavigatorArray: any;
 
  navigationArray = [{ 'name': 'home', 'url': '/home', 'label': 'HOME' },
  { 'name': 'enrolled sessions', 'url': '/enrolled-sessions', 'label': 'ENROLLED_SESSIONS' },
  { 'name': 'created sessions', 'url': '/created-sessions', 'label': 'CREATED_SESSIONS' },
  { 'name': 'mentor directory', 'url': '/mentor-directory', 'label': 'MENTOR_DIRECTORY' }]

  mentorArray = ["created sessions"]
  labels: any;
  appTitle = this.titleService.getTitle();
  pageTitle: any;
  userDetails: any;
 

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private translate: TranslateService, private profileService: ProfileService, private titleService: Title, private location: Location) {
    this.setTitle();
   
  }
  
  ngOnInit(): void {
    
    this.profileService.profileDetails().then((userDetails) => {
      this.userDetails = userDetails;
    })
    this.translate.get(this.navigationArray.map(label => label.label)).subscribe(values => {
      this.labels = Object.assign({}, values);;
    })
 
  }

  setTitle() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd),
    ).subscribe(() => {
      const child: any = this.activatedRoute.firstChild;
      this.pageTitle = (child.snapshot.data['title'])?child.snapshot.data['title']:"";
    })
  }
  onBack(){
    this.location.back()
  }

}
