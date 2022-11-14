import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core"
@Component({
  selector: "app-role-selection-card",
  templateUrl: "./role-selection-card.component.html",
  styleUrls: ["./role-selection-card.component.scss"],
})
export class RoleSelectionCardComponent implements OnInit {
  @Input() role: any
  @Input() isSelected:any
  @Output() cardOneSelected = new EventEmitter()
  constructor() {}

  ngOnInit(): void {}

  cardSelected(role: any) {
    this.cardOneSelected.emit(role)
  }
  buttonClick() {
    //TODO navigate to register page
  }
}
