import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core"
// import * from "../../../../assets/images/role-selection/"
@Component({
  selector: "app-role-selection-card",
  templateUrl: "./role-selection-card.component.html",
  styleUrls: ["./role-selection-card.component.scss"],
})
export class RoleSelectionCardComponent implements OnInit {
  @Input() roleList: any
  @Output() cardOneSelected = new EventEmitter()

  selectedRole = ""
  constructor() {}

  ngOnInit(): void {}

  cardSelected(role: any) {
    this.selectedRole = role.role
    this.cardOneSelected.emit(this.selectedRole)
    console.log(this.selectedRole)
  }
  buttonClick() {
    //TODO navigate to register page
  }
}
