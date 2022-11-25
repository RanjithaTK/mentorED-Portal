import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import * as _ from 'lodash';
import { API_CONSTANTS } from '../../constants/apiUrlConstants';
import { localKeys } from '../../constants/localStorage.keys';
import { ApiService } from '../api/api.service';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private localStorage: LocalStorageService,
    private router: Router
    ) { }

    async createAccount(formData: any) {
      const config = {
        url: API_CONSTANTS.REGISTRATION_OTP,
        payload: formData,
      };
      try {
        this.apiService.post(config).subscribe((data: any) =>{
          this.setUserInLocal(data)
        })
        return config;
      }
      catch (error) {
        return null
      }
    }

  async loginAccount(formData: any){
    const config = {
      url: API_CONSTANTS.ACCOUNT_LOGIN,
      payload: formData
    };
    try {
        this.apiService.post(config).subscribe((data: any) =>{
        this.setUserInLocal(data)
        this.router.navigate(['/home'])
      })
      return config
      
    } 
    catch(error){
      return null;
    }
  }
  setUserInLocal(data: any) {
    let token = _.pick(data.result,['access_token','refresh_token'])
    this.localStorage.saveLocalData(localKeys.TOKEN, JSON.stringify(token));
    this.localStorage.saveLocalData(localKeys.USER_DETAILS, JSON.stringify(data.result.user));
    // this.localStorage.saveLocalData(localKeys.SELECTED_LANGUAGE, data.result.user.preferredLanguage);
  }
}
