import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  options=[{label:"English",value:"en"},{label:"Hindi",value:"hi"}]
  selectedLanguage="en"
constructor( private translate:TranslateService) { }
  ngOnInit(): void {
  }

}
