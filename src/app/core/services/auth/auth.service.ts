import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { map } from 'rxjs';
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
    ) { }

  loginAccount(formData: any) {
    const config = {
      url: API_CONSTANTS.ACCOUNT_LOGIN,
      payload: formData
    };
    return this.apiService.post(config).pipe(
      map((result:any) => {
        this.setUserInLocal(result)
        return result;
      })
    )
  }
  
  async setUserInLocal(data: any) {
    let token = _.pick(data.result, ['access_token', 'refresh_token']);
    this.userService.token = token;
    this.userService.userEvent.next(data.result.user);
    await this.localStorage.saveLocalData(localKeys.TOKEN, JSON.stringify(token));
    await this.localStorage.saveLocalData(localKeys.USER_DETAILS, JSON.stringify(data.result.user));
    await this.localStorage.saveLocalData(localKeys.SELECTED_LANGUAGE, data.result.user.preferredLanguage);
    return true;
  }
}
