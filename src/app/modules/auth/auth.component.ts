import { Component, OnInit } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class AuthComponent implements OnInit {
  title = "Welcome to mentorED";

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "demo",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "./app/modules/ath/MentorEd-logo.svg"
      )
    );
  }

  ngOnInit(): void {}
}
