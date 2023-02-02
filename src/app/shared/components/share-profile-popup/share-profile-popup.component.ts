import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-share-profile-popup',
  templateUrl: './share-profile-popup.component.html',
  styleUrls: ['./share-profile-popup.component.scss']
})
export class ShareProfilePopupComponent implements OnInit {
  copyLink: any = 'COPY_LINK'
  hoverStatus:any = true;
  constructor(@Inject(MAT_DIALOG_DATA)
  public data: { defaultValue: any }, public dialogRef: MatDialogRef<ShareProfilePopupComponent>
  ) { }

  ngOnInit(): void {
  }
  onClickCancel() {
    this.dialogRef.close();
  }
  copyToClipBoard() {
    navigator.clipboard.writeText(this.data.defaultValue).then(() => {
      this.copyLink = 'COPIED_LINK'
      this.hoverStatus = false
    }, () => {
      console.error('Failed to copy');
    });
  }
}
