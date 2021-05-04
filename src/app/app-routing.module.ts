import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { DetectionQrcodeComponent } from './detection-qrcode/detection-qrcode.component';
import { VirtualEnvironmentComponent } from './virtual-environment/virtual-environment.component';
import { LocationDetectionComponent } from './location-detection/location-detection.component';
import { TestZoneComponent } from './test-zone/test-zone.component';

const routes: Routes = [
    {path: '', component: NavbarComponent,
        children:[
            {path:'', redirectTo: 'virtual', pathMatch: 'full'},
            {path:'virtual', component: VirtualEnvironmentComponent },
            {path:'detection', component: DetectionQrcodeComponent },
            {path:'location', component: LocationDetectionComponent },
            {path:'test-zone', component: TestZoneComponent }
        ]
    },
    {path:'**', redirectTo: 'virtual' }
];

@NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
})
export class AppRoutingModule { }
