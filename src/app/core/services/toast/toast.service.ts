import { Injectable } from '@angular/core';
import {
  MatSnackBar,
} from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  durationInSeconds = 2;
  constructor(private _snackBar: MatSnackBar, private translate: TranslateService) { }

  showMessage(msg: any, cssclass: any = "success", options: any = {
    hp : 'center',
    vp : 'top', 
    duration : 2
  }) {
    let texts: any;
    this.translate.get([msg]).subscribe(resp => {
      texts = resp;
    })
    this._snackBar.open((_.isEmpty(texts))?msg:texts[msg], '', {
      horizontalPosition: options.hp,
      verticalPosition: options.vp,
      duration: options.duration * 1000,
      panelClass: cssclass
    });
  }
}