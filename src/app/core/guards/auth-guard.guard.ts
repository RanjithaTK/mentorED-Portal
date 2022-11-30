import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { localKeys } from '../constants/localStorage.keys';
import { LocalStorageService } from '../services/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private localStorage: LocalStorageService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.localStorage.getLocalData(localKeys.TOKEN).then((token: any) => {
        if(token){
          return true
        } else {
          this.router.navigate(['/auth/login'])
          return false
        }
    })
  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.localStorage.getLocalData(localKeys.TOKEN).then((token: any) => {
        if(token){
          this.router.navigate(['/home'])
          return false
        } else {
          return true
        }
    })
  }
}
