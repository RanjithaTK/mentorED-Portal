import { Component, OnInit, EventEmitter, Output } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { filter } from 'rxjs'
import { localKeys } from 'src/app/core/constants/localStorage.keys'
import { AuthService } from 'src/app/core/services/auth/auth.service'
import { LocalStorageService } from 'src/app/core/services/local-storage/local-storage.service'
import { ProfileService } from 'src/app/core/services/profile/profile.service'
import { ToastService } from 'src/app/core/services/toast/toast.service'
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
  selectedLanguage: string = 'en';
  showSearchbar = false;
  searchText: string

  constructor(private translate: TranslateService, private authService: AuthService, private localStorage: LocalStorageService, private router: Router, private activatedRoute: ActivatedRoute, private toast: ToastService,private profileService: ProfileService) {
    this.checkForSearchbar();
    this.localStorage.getLocalData(localKeys.SELECTED_LANGUAGE).then((lang)=>{
      if(lang)this.selectedLanguage = lang;
    })
  }
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
  checkForSearchbar() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd),)
    .subscribe(() => {
      const child: any = this.activatedRoute.firstChild;
      this.showSearchbar = (child.snapshot.data['showSearchbar'])?child.snapshot.data['showSearchbar'] : false;
    })
  }
  checkInput(){
    this.searchText=this.searchText.replace(/^ +/gm, '')
  }
  onSearch() {

    this.router.navigate(['/home'], {
      
      queryParams: {
        searchText: this.searchText,
      }
    });
  }
  // search(){
  //   this.router.navigate(['/home-search']);
  // }
  languageEvent() {
    this.localStorage.saveLocalData(localKeys.SELECTED_LANGUAGE, this.selectedLanguage).then(()=>{
      this.translate.use(this.selectedLanguage).subscribe(()=>{
        this.toast.showMessage("LANGUAGE_CHANGED_SUCCESSFULLY", "success")
      })
    })
  }
  goToProfile() {
    this.getDetails().then((userDetails)=>{
      if(userDetails.about){
        this.router.navigate(['/profile']);
      }else{
         this.router.navigate(['/edit-profile'])
      }
    })
   
  }
  async getDetails() {
    return await this.profileService.profileDetails()
  }
}
