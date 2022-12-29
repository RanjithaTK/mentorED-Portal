import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogue-box',
  templateUrl: './dialogue-box.component.html',
  styleUrls: ['./dialogue-box.component.scss']
})
export class InputDialogueBoxComponent implements OnInit {
  data:any;
  constructor(private dialogRef: MatDialogRef<InputDialogueBoxComponent>) { }

  ngOnInit(): void {
  }

  cancel() {
    this.dialogRef.close();
  }
}
