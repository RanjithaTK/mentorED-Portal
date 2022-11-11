import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { DynamicFormComponent } from './components'
import { ReactiveFormsModule } from '@angular/forms'
import { RoleSelectionCardComponent } from './components/role-selection-card/role-selection-card.component'
import { MatCardModule } from '@angular/material/card'
@NgModule({
  declarations: [DynamicFormComponent, RoleSelectionCardComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    DynamicFormComponent,
    RoleSelectionCardComponent,
  ],
})
export class SharedModule { }
