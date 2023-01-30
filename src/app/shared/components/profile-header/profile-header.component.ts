import { Component, OnInit,Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements OnInit {
  @Input() details: any
  @Input() layoutAlign: any
  @Input() mentorDirectory:any
  selectedPage:any
  constructor(private translate:TranslateService,private router: Router) { 
    this.selectedPage = router.url
  }
  public isArray(arr:any ) {
    return Array.isArray(arr)
 }
  ngOnInit(): void {
  }
  editProfile(){
    this.router.navigate(["./edit-profile"])
  }

}
