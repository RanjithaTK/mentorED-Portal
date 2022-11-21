import { Injectable } from '@angular/core';
import { url } from 'inspector';
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
    private localStorage: LocalStorageService
    ) { }

  async loginAccount(formData: any){
    const config = {
      url: API_CONSTANTS.ACCOUNT_LOGIN,
      payload: formData
    };
    try {
        this.apiService.post(config).subscribe((success: any) =>{
        console.log("success",success,success.result.access_token)
        this.localStorage.saveLocalData(localKeys.TOKEN, JSON.stringify(success.result.access_token));
        this.localStorage.saveLocalData(localKeys.USER_DETAILS, JSON.stringify(success.result.user));
        
      })
      return config
      
    } 
    catch(error){
      return null;
    }
  }
}
