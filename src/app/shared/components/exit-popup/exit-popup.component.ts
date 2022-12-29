import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-exit-popup',
  templateUrl: './exit-popup.component.html',
  styleUrls: ['./exit-popup.component.scss']
})
export class ExitPopupComponent implements OnInit {
  public dialogRef: MatDialogRef<ExitPopupComponent>
  constructor() { }

  ngOnInit(): void {
  }
}
