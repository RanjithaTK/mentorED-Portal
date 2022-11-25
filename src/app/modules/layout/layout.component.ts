import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  options=[{label:"English",value:"en"},{label:"Hindi",value:"hi"}]
  selectedLanguage="en"
  constructor() { }

  ngOnInit(): void {
  
  }
}
