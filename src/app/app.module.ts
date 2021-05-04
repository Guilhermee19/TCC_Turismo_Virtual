import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationDetectionComponent } from './location-detection/location-detection.component';
import { DetectionQrcodeComponent } from './detection-qrcode/detection-qrcode.component';
import { TestZoneComponent } from './test-zone/test-zone.component';
import { VirtualEnvironmentComponent } from './virtual-environment/virtual-environment.component';
import { ScreenOpencvComponent } from './test-zone/screen-opencv/screen-opencv.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LocationDetectionComponent,
    DetectionQrcodeComponent,
    TestZoneComponent,
    VirtualEnvironmentComponent,
    ScreenOpencvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
