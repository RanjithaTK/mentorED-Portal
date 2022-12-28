import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-exit-popup',
  templateUrl: './exit-popup.component.html',
  styleUrls: ['./exit-popup.component.scss']
})
export class ExitPopupComponent implements OnInit {


  constructor(private router:Router, private location:Location) { }

  ngOnInit(): void {
  }
  onClickExit(){
    // this.location.back()
  }
  // onClickCancel(){
  //   this.router.navigate(['/edit-profile'])
  // }
}
