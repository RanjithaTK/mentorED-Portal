import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-exit-popup',
  templateUrl: './exit-popup.component.html',
  styleUrls: ['./exit-popup.component.scss']
})
export class ExitPopupComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ExitPopupComponent>) { }

  ngOnInit(): void {
  }
  onClickExit(){
    this.dialogRef.close(true);
  }
  onClickCancel(){
    this.dialogRef.close(false);
  }
}
