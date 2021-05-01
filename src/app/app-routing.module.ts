import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CameraComponent } from './camera/camera.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
    {path: '', component: NavbarComponent,
        children:[
            {path:'', redirectTo: 'home', pathMatch: 'full'},
            {path:'home', component: HomeComponent },
            {path:'camera', component: CameraComponent }
        ]
    }
];

@NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
})
export class AppRoutingModule { }
