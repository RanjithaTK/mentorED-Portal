import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { localKeys } from './core/constants/localStorage.keys';
import { LocalStorageService } from './core/services/local-storage/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translate: TranslateService, private localStorage: LocalStorageService) {
    this.initializeApp();
  }

  initializeApp() {
    this.languageSetting();
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
