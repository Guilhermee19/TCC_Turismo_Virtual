import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
// import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetectionQrcodeComponent } from './detection-qrcode/detection-qrcode.component';
import { TestZoneComponent } from './test-zone/test-zone.component';
import { VirtualEnvironmentComponent } from './virtual-environment/virtual-environment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DetectionQrcodeComponent,
    TestZoneComponent,
    VirtualEnvironmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonModule,
    // SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
