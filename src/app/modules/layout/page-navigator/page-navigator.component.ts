import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-page-navigator',
  templateUrl: './page-navigator.component.html',
  styleUrls: ['./page-navigator.component.scss']
})
export class PageNavigatorComponent implements OnInit {
  
  
  pageNavigatorArray=[{'name':'home','url':'home','label':'HOME'},
  {'name':'enrolled sessions','url':'enrolled-sessions','label':'ENROLLED_SESSIONS'},
  {'name':'created sessions','url':'created-sessions','label':'CREATED_SESSIONS'},
  {'name':'mentor directory','url':'mentor-directory','label':'MENTOR_DIRECTORY'}]
  labels:any;
  pageNavigationLabel = ['HOME','ENROLLED_SESSIONS','CREATED_SESSIONS','MENTOR_DIRECTORY']

  constructor( private router: Router, private translate:TranslateService) { }

  ngOnInit(): void {
     
      this.translate.get(this.pageNavigationLabel).subscribe(
        values => {
          this.labels  = Object.assign({}, values);;
        }

     )
     
  }


}
