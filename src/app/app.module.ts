import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
// import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatMenuModule } from '@angular/material/menu';
import { AgmCoreModule } from '@agm/core';
// import { MapsService } from './maps.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetectionQrcodeComponent } from './detection-qrcode/detection-qrcode.component';
import { TestZoneComponent } from './test-zone/test-zone.component';
import { VirtualEnvironmentComponent } from './virtual-environment/virtual-environment.component';
import { LocationOnMapComponent } from './location-on-map/location-on-map.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DetectionQrcodeComponent,
    TestZoneComponent,
    VirtualEnvironmentComponent,
    LocationOnMapComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonModule,
    // SlickCarouselModule,
    MatMenuModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCVkT1zBJaeZqoUJgBUAmx6zfwSCtD-2q8'
    }),
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
