import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { DynamicFormComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DynamicFormComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports:[
    MatButtonModule,
    MatInputModule,
    DynamicFormComponent
  ]
})
export class SharedModule { }
