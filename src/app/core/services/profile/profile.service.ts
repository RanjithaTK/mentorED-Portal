import { Location } from "@angular/common";
import { Injectable } from "@angular/core";
import * as _ from "lodash";
import { map } from "rxjs";
import { API_CONSTANTS } from "../../constants/apiUrlConstants";
import { localKeys } from "../../constants/localStorage.keys";
import { ApiService } from "../api/api.service";
import { LocalStorageService } from "../local-storage/local-storage.service";
import { ToastService } from "../toast/toast.service";
import { UserService } from "../user/user.service";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  constructor(
    private localStorage: LocalStorageService,
    private apiService: ApiService,
    private toast: ToastService
  ) {}

  async profileDetails(): Promise<any> {
    return new Promise((resolve) => {
      try {
        this.localStorage
          .getLocalData(localKeys.USER_DETAILS)
          .then(async (data) => {
            if (data) {
              resolve(JSON.parse(data));
            } else {
              this.getProfileDetails().subscribe((user) => {
                this.getProfileDetailsWithRole(user._id, user.isAMentor).subscribe((user)=>{
                  resolve(user);
                })
              })
            }
          });
      } catch (error) { }
    });
  }

  getProfileDetails() {
    const config = {
      url: API_CONSTANTS.PROFILE_DETAILS,
      payload: {},
    };
    return this.apiService.get(config).pipe(
      map((result: any) => {
        return result.result;
      })
    );
  }

  getProfileDetailsWithRole(id: string, isAMentor: boolean) {
    const config = {
      url: (isAMentor === true) ? API_CONSTANTS.MENTOR_PROFILE_DETAILS + id : API_CONSTANTS.MENTEE_PROFILE_DETAILS + id,
      payload: {},
    };
    return this.apiService.get(config).pipe(
      map((result: any) => {
        let data = _.get(result, "result");
        this.localStorage.saveLocalData(
          localKeys.USER_DETAILS,
          JSON.stringify(data)
        );
        return data;
      })
    );
  }

  profileUpdate(formData: any) {
    const config = {
      url: API_CONSTANTS.PROFILE_UPDATE,
      payload: formData,
    };
    return this.apiService.post(config).pipe(
      map(async (response: any) => {
          return response;
      })
    );
  }
  registrationOtp(formData: any) {
    const config = {
      url: API_CONSTANTS.REGISTRATION_OTP,
      payload: formData,
    };
    return this.apiService.post(config).pipe(
      map((result: any) => {
        return result;
      })
    );
  }
  generateOtp(formData: any) {
    const config = {
      url: API_CONSTANTS.GENERATE_OTP,
      payload: formData,
    };
    return this.apiService.post(config).pipe(
      map((result: any) => {
        this.toast.showMessage(result.message, "success");
        return result;
      })
    );
  }
}