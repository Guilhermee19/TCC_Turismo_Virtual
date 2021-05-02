import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor( private router: Router) { 
        this.router.events.subscribe( data => {
            this.url = this.router.url;

            if(this.url == '/home')  this.title = 'Realidade Virtual';
            else if(this.url == '/camera')  this.title = 'Realidade Aumentada';

        }); 
    }
    
    showFiller = false;

    url;
    select

    title: string;
    ngOnInit(): void {
    }

}
