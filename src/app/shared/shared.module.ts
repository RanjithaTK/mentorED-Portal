import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { DynamicFormComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from '@angular/material/icon';
import { InputChipComponent } from './components/input-chip/input-chip.component';

@NgModule({
  declarations: [
    DynamicFormComponent,
    InputChipComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatSnackBarModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatFormFieldModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  exports:[
    MatButtonModule,
    MatInputModule,
    DynamicFormComponent,
    MatChipsModule,
    MatSnackBarModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatFormFieldModule,
    MatIconModule
  ]
})
export class SharedModule { }
