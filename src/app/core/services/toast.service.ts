import { Injectable } from '@angular/core';
declare var $: any;
import {
  MatSnackBar,
} from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  showToast(arg0: string, arg1: string) {
    throw new Error('Method not implemented.');
  }
  durationInSeconds = 3;
  constructor(private _snackBar: MatSnackBar, private translate: TranslateService) { }

  showMessage(msg: any, cssclass: any) {
    let texts: any;
    this.translate.get([msg]).subscribe(resp => {
      texts = resp;
    })
    this._snackBar.open((_.isEmpty(texts))?msg:texts[msg], '', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: this.durationInSeconds * 1000,
      panelClass: cssclass
    });
  }
}