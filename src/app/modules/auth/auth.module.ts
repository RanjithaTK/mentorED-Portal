import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { AuthComponent } from "./auth.component"
import { AuthRoutingModule } from "../auth-routing.module"
import { LoginComponent } from "./login/login.component"
import { RegisterComponent } from "./register/register.component"
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatIconModule } from "@angular/material/icon"
import { MatGridListModule } from "@angular/material/grid-list"
import { RoleSelectionComponent } from "./role-selection/role-selection.component"

import { MatCardModule } from "@angular/material/card"
import { MatButtonModule } from "@angular/material/button"
@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    RoleSelectionComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class AuthModule {}
