import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon'
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RoleSelectionCardComponent } from './components/role-selection-card/role-selection-card.component';
import { SessionCardComponent } from './components/session-card/session-card.component';

@NgModule({
  declarations: [
    DynamicFormComponent,
    RoleSelectionCardComponent,
    SessionCardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    DynamicFormComponent,
    RoleSelectionCardComponent,
    SessionCardComponent
  ],
})
export class SharedModule { }
