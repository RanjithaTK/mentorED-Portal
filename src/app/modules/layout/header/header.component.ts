import { Component, OnInit, EventEmitter, Output } from '@angular/core'
import { Router } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { AuthService } from 'src/app/core/services/auth/auth.service'
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
  constructor(private translate: TranslateService, private authService: AuthService) {}
  ngOnInit(): void {}
  onClick() {
    this.menuToggleEvent.emit()
  }
  onLogout(){
    this.authService.logoutAccount()
  }
}
