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
      image:
        "https://th.bing.com/th/id/R.7572fc14214263e4be04ee0a25833c5e?rik=wY825ELLifKb6g&riu=http%3a%2f%2fwww.aattraininghub.com%2fwp-content%2fuploads%2f2016%2f03%2fmentoring.jpg&ehk=Dlw04aBMGmjmpSC1%2bCESTDOZVxjPzGpLQL88az3SiNI%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      role: "Mentee",
      description: "Learn and grow from verified Mentors",
      image:
        "https://th.bing.com/th/id/R.7572fc14214263e4be04ee0a25833c5e?rik=wY825ELLifKb6g&riu=http%3a%2f%2fwww.aattraininghub.com%2fwp-content%2fuploads%2f2016%2f03%2fmentoring.jpg&ehk=Dlw04aBMGmjmpSC1%2bCESTDOZVxjPzGpLQL88az3SiNI%3d&risl=&pid=ImgRaw&r=0",
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
