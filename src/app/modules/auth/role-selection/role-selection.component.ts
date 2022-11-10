import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-role-selection",
  templateUrl: "./role-selection.component.html",
  styleUrls: ["./role-selection.component.scss"],
})
export class RoleSelectionComponent implements OnInit {
  buttonEnable = false

  roleList = [
    {
      role: "Mentor",
      description: "Build confidence as a leader, and grow your network.",
      image: "../../../../assets/images/role-selection/mentor_icon.png",
    },
    {
      role: "Mentee",
      description: "Learn and grow from verified Mentors",
      image: "../../../../assets/images/role-selection/mentee_icon.png",
    },
  ]

  selectedRole = ""
  constructor() {}

  ngOnInit(): void {}

  cardSelected(role: any) {
    this.buttonEnable = true
    this.selectedRole = role.role
  }
  buttonClick() {
    //TODO navigate to register page
  }
}
