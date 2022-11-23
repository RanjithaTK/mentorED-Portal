import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { localKeys } from './core/constants/localStorage.keys';
import { ApiService } from './core/services';
import { LocalStorageService } from './core/services/local-storage/local-storage.service';
import { UserService } from './core/services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translate: TranslateService, private localStorage: LocalStorageService, private userService: UserService, private apiService: ApiService) {
    this.initializeApp();
  }

  initializeApp() {
    this.setHttpHeaders();
    this.languageSetting();
  }

  setHttpHeaders() {
    this.userService.userEventEmitted$.subscribe(async ()=>{
      await this.apiService.setHeader();
    })
  }

  languageSetting() {
    this.localStorage.getLocalData(localKeys.SELECTED_LANGUAGE).then(data => {
      if (data) {
        this.translate.use(data);
      } else {
        this.setLanguage('en');
      }
    }).catch(error => {
      this.setLanguage('en');
    })
  }

  setLanguage(lang: string) {
    this.localStorage.saveLocalData(localKeys.SELECTED_LANGUAGE, lang).then(data => {
      this.translate.use(lang);
    }).catch(error => {
      this.translate.use(lang)
    })
  }
}
