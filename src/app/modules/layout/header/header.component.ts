import { Component, OnInit, EventEmitter, Output } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() menuToggleEvent = new EventEmitter()
  letter:any;
  options = [
    { label: 'English', value: 'en' },
    { label: 'Hindi', value: 'hi' },
  ]
  selectedLanguage = 'en'
  constructor(private translate: TranslateService) {}
  ngOnInit(): void {
    let user: any = localStorage.getItem('user')
    this.letter = (JSON.parse(user).name)[0]
  }
  onClick() {
    this.menuToggleEvent.emit()
  }
}
