import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { localKeys } from '../../constants/localStorage.keys';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = environment.base_url;
  private currentLanguage: any = this.localStorage.getLocalData(localKeys.SELECTED_LANGUAGE);
  private timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  constructor(private http: HttpClient, private userService: UserService, private localStorage: LocalStorageService) { }

  getHeaders() {
    const timezone = this.timeZone ? this.timeZone : Intl.DateTimeFormat().resolvedOptions().timeZone;
    const token = '';
    const headerOptions = {
      headers: new HttpHeaders({
        'timeZone': timezone,
        'acceptLanguage': 'en' ,
        'Content-Type': 'application/json',
        // 'X-auth-token': token ? token : "",

      })
    }
    return headerOptions;
  }


  private handleError(error: HttpErrorResponse) {
    // Handle the HTTP error here
    return throwError('Something wrong happened');
  }

  get(config: any) {
    return this.http.get(`${this.baseUrl}${config.url}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  post(config: any) {
    const headers = this.getHeaders();
    return this.http.post(`${this.baseUrl}${config.url}`, config.payload, headers)
      .pipe(
        catchError(this.handleError)
      );
  }

  delete() { }

  patch() { }
  
}
