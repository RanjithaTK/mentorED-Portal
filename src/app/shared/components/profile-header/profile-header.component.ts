import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements OnInit {
  @Input() details: any
  constructor() { }
  public isArray(arr:any ) {
    return Array.isArray(arr)
 }
  ngOnInit(): void {
  }

}
