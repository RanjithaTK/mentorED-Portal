import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-generic-details',
  templateUrl: './generic-details.component.html',
  styleUrls: ['./generic-details.component.scss'],
})
export class GenericDetailsComponent implements OnInit {
  @Input() details: any
  constructor(private translate:TranslateService) {}
  public isArray(arr:any ) {
    return Array.isArray(arr)
 }
  ngOnInit(): void {
  }
  
}
