import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class AuthComponent implements OnInit {
isPhone: boolean;
  constructor( private responsive: BreakpointObserver) { 
    this.responsive.observe(Breakpoints.Handset).subscribe(result => {
      this.isPhone = result.matches
    })
  }

  ngOnInit(): void {}
}
