import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-navigator',
  templateUrl: './page-navigator.component.html',
  styleUrls: ['./page-navigator.component.scss']
})
export class PageNavigatorComponent implements OnInit {
  
  selectedPage : any;
  pageNavigatorArray=[{'name':'home','url':'home'},
  {'name':'enrolled sessions','url':'enrolled-sessions'},
  {'name':'created sessions','url':'created-sessions'},
  {'name':'mentor directory','url':'mentor-directory'}]
  
  constructor( public router: Router) { }

  ngOnInit(): void {
  }
  pageSelected(page:any){
    this.selectedPage = page;
    if(page == 'home' ){
      this.router.navigate(['/home']); 
    } else if( page == 'enrolled sessions'){
      this.router.navigate(['/enrolled-sessions']); 
    }else if(page == 'created sessions'){
      this.router.navigate(['/created-sessions']); 
    }else{
      this.router.navigate(['/mentor-directory']); 
    }
  }
}
