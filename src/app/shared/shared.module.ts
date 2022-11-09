import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { SessioncardComponent } from './components/sessioncard/sessioncard.component';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  declarations: [
    SessioncardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
  ],
  exports:[
    MatButtonModule,
    MatInputModule,
    SessioncardComponent
   
  ]
})
export class SharedModule { }
