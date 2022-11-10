import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sessioncard',
  templateUrl: './sessioncard.component.html',
  styleUrls: ['./sessioncard.component.scss']
})
export class SessioncardComponent implements OnInit {
  @Input() cardData: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // redirectToViewDetails() {
  //   this.router.navigate([''])
  // }
}
