import { Component, OnInit,Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { MentorService } from 'src/app/core/services/mentor/mentor.service';
import { SharePopupComponent } from '../share-popup/share-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { PlatformLocation } from '@angular/common';

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
  url: any;
  constructor(private translate:TranslateService,public dialog: MatDialog,private pLocation: PlatformLocation,private router: Router, private mentorService:MentorService) { 
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
  shareProfile(){
    this.url = (this.pLocation as any).location.href;
    this.dialog.open(SharePopupComponent, {
      data: { defaultValue: this.url},
       });
  }

}
