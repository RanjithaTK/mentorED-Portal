import { Location } from '@angular/common';
import { Injectable, Injector } from '@angular/core';
import * as _ from 'lodash';
import { API_CONSTANTS } from '../constants/apiUrlConstants';
import { localKeys } from '../constants/localStorage.keys';
import { ApiService } from './api/api.service';
import { AuthService } from './auth/auth.service';
import { LocalStorageService } from './local-storage/local-storage.service';
import { UserService } from './user/user.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private localStorage: LocalStorageService, private apiService: ApiService, private userService: UserService, private _location: Location, private injector: Injector) { }

  async profileDetails(): Promise<any> {
    return new Promise((resolve) => {
      try {
        this.localStorage.getLocalData(localKeys.USER_DETAILS)
          .then(async (data) => {
            if (data) {
              resolve(data);
            } else {
              var res = await this.getProfileDetailsAPI();
              await this.localStorage.saveLocalData(localKeys.USER_DETAILS, JSON.stringify(res));
              data = _.get(data, 'user');
              resolve(data);
            }
          })
      } catch (error) {
      }
    });
  }
  
  async getProfileDetailsAPI() {
    const config = {
      url: API_CONSTANTS.PROFILE_DETAILS,
      payload: {}
    };
    try {
      return this.apiService.get(config).subscribe(response=>{
        let data = _.get(response, 'result');
        this.localStorage.saveLocalData(localKeys.USER_DETAILS, JSON.stringify(data));
        return data;
      })
    }
    catch (error) {
      return null
    }
  }

  async profileUpdate(formData:any, showToast=true) {
    let userDetails = await this.localStorage.getLocalData(localKeys.USER_DETAILS);
    const config = {
      url: API_CONSTANTS.PROFILE_UPDATE,
      payload: formData,
    };
    try {
      return this.apiService.get(config).subscribe(async (response)=>{
        userDetails.user = null;
        let profileData = await this.getProfileDetailsAPI();
        await this.localStorage.saveLocalData(localKeys.USER_DETAILS, JSON.stringify(profileData));
        this.userService.userEvent.next(profileData);
        this._location.back();
        return profileData;
      })
    }
    catch (error) {
      return null
    }
  }

  async getProfileDetailsFromAPI(isAMentor:boolean, id:any){
    const config = {
      url: (isAMentor)?API_CONSTANTS.MENTOR_PROFILE_DETAILS+id:API_CONSTANTS.MENTEE_PROFILE_DETAILS+id,
      payload: {}
    };
    try {
      return this.apiService.get(config).subscribe(response=>{
        let data = _.get(response, 'result');
        this.localStorage.saveLocalData(localKeys.USER_DETAILS, JSON.stringify(data));
        return data;
      })
    }
    catch (error) {
      return null
    }
  }

  async generateOtp(formData:any) {
    const config = {
      url: API_CONSTANTS.GENERATE_OTP,
      payload: formData
    };
    try {
      return this.apiService.get(config).subscribe(response=>{
        return response;
      })
    }
    catch (error) {
      return null
    }
  }

  async updatePassword(formData:any) {
    const config = {
      url: API_CONSTANTS.RESET_PASSWORD,
      payload: formData
    };
    try {
      return this.apiService.get(config).subscribe(response=>{
        let authService = this.injector.get(AuthService);
        let userData = authService.setUserInLocal(response);
        return userData;
      })
      
    }
    catch (error) {
      return null;
    }
  }

  async registrationOtp(formData:any) {
    const config = {
      url: API_CONSTANTS.REGISTRATION_OTP,
      payload: formData
    };
    try {
      return this.apiService.get(config).subscribe(response=>{
        return response;
      })
    }
    catch (error) {
      return null
    }
  }

  async shareProfile(id:any) {
    const config = {
      url: API_CONSTANTS.SHARE_MENTOR_PROFILE+id,
      payload: {}
    };
    try {
      return this.apiService.get(config).subscribe(response=>{
        let result = _.get(response, 'result');
        return result;
      })
    }
    catch (error) {
      return null
    }
  }
}
