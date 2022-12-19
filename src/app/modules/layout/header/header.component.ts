import { Component, OnInit, EventEmitter, Output } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { localKeys } from 'src/app/core/constants/localStorage.keys'
import { AuthService } from 'src/app/core/services/auth/auth.service'
import { LocalStorageService } from 'src/app/core/services/local-storage/local-storage.service'
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
  constructor(private translate: TranslateService, private authService: AuthService, private localStorage: LocalStorageService) {}
  ngOnInit(): void {
    this.localStorage.getLocalData(localKeys.USER_DETAILS).then((data)=>{
      this.letter = data?JSON.parse(data).name[0]:'U';
    })
  }
  onClick() {
    this.menuToggleEvent.emit()
  }
  onLogout(){
    this.authService.logoutAccount()
  }
}
