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
            let aux = this.router.url.split('/');
            console.log(aux)

            this.url = aux[1]

            if(this.url == 'home')  this.title = 'Tour Virtual';
            if(this.url == 'location-map')  this.title = 'Localizações';
            if(aux[3] == 'virtual')  this.title = 'Realidade Virtual';
            if(aux[3] == 'detection')  this.title = 'Realidade Aumentada';
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
