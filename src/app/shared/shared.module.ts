import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon'
import { DynamicFormComponent,SessionCardComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DynamicFormComponent,
    SessionCardComponent,

  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports:[
    MatButtonModule,
    MatInputModule,
    DynamicFormComponent,
    SessionCardComponent
  ]
})
export class SharedModule { }
