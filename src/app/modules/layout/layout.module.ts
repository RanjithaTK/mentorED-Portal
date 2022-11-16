import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNavigatorComponent } from './page-navigator/page-navigator.component';
import { LayoutComponent } from './layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeModule } from '../home/home.module';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
FlexLayoutModule
@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    PageNavigatorComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatToolbarModule,
    HomeModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule

  ]


})
export class LayoutModule { }
