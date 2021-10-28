import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { DetectionQrcodeComponent } from './detection-qrcode/detection-qrcode.component';
import { VirtualEnvironmentComponent } from './virtual-environment/virtual-environment.component';
import { TestZoneComponent } from './test-zone/test-zone.component';
import { LocationOnMapComponent } from './location-on-map/location-on-map.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path: '', component: NavbarComponent,
        children:[
            {path:'', redirectTo: 'home', pathMatch: 'full'},
            {path:'home', component: HomeComponent },
            {path:'location-map', component: LocationOnMapComponent },
            {path:'virtual', component: VirtualEnvironmentComponent },
            {path:'detection', component: DetectionQrcodeComponent },
            {path:'test-zone', component: TestZoneComponent },
        ]
    },
    {path:'**', redirectTo: 'virtual' }
];

@NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
})
export class AppRoutingModule { }
