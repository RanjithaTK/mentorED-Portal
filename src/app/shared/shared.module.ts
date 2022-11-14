import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon'
import { DynamicFormComponent,SessionCardComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';



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
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  exports:[
    MatButtonModule,
    MatInputModule,
    DynamicFormComponent,
    SessionCardComponent,
    FlexLayoutModule
  ]
})
export class SharedModule { }
