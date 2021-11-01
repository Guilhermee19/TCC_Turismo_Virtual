import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../service/storage.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor( 
        private router: Router,
        private storage: StorageService
    ) { 
        this.router.events.subscribe( data => {
            this.url = this.router.url;
            if(this.url == '/home')  this.title = 'Tour Virtual';
            if(this.url == '/location-map')  this.title = 'Localizações';
            if(this.url == '/virtual')  this.title = 'Realidade Virtual';
            else if(this.url == '/detection')  this.title = 'Realidade Aumentada';
            else if(this.url == '/location')  this.title = 'Realidade por Localização';
            else if(this.url == '/test-zone')  this.title = 'Zona de Testes';
        }); 
    }
    
    showFiller = false;
    url;
    select
    title: string;

    qrcodes;

    ngOnInit(): void {

        this.qrcodes = this.storage.listQrcodes;
        
        setInterval(function(){ 
            // console.clear();
        }, 1000);
    }

    sendEmail(){
        this.storage.sendMail()
    }

}
