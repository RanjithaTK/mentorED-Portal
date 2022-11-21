import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNavigatorComponent } from './page-navigator/page-navigator.component';
import { LayoutComponent } from './layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule} from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core'; 


import { MatListModule } from '@angular/material/list';
import { SessionListingComponent } from './components/session-listing/session-listing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreatedSessionsComponent } from './components/created-sessions/created-sessions.component';
import { MentorDirectoryComponent } from './components/mentor-directory/mentor-directory.component';
FlexLayoutModule
@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    PageNavigatorComponent,
    SessionListingComponent,
    CreatedSessionsComponent,
    MentorDirectoryComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    FlexLayoutModule,
    MatButtonModule,
    TranslateModule,

   
    MatListModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    SharedModule

  ]


})
export class LayoutModule { }
