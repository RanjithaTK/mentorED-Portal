import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  @Input() imgData: any;
  @Output() imageUploadEvent = new EventEmitter();
  defaultImg: any;

  constructor() { }

  ngOnInit(): void {
    switch (this.imgData.type) {
      case 'profile':
        this.defaultImg = '/assets/images/user-circle-add.svg';
        break;

      case 'session':
        this.defaultImg = '/assets/images/default-session-upload.svg'
    }
  }

  imageUpload(event: any) {
    if (event.target.files[0]) {
      this.imageUploadEvent.emit(event.target.files[0])
    }
  }
}
