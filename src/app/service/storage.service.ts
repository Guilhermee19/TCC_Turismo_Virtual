import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class StorageService {

    constructor() { }

    listQrcodes=[
        {name: 'QRG', code:'qrco_G', image:'/assets/QRCode/QRG.png', patt: '/assets/QRCode/QRG.patt'},
        {name: 'QRU', code:'qrco_U', image:'/assets/QRCode/QRU.png', patt: '/assets/QRCode/QRU.patt'},
        {name: 'QRI', code:'qrco_I', image:'/assets/QRCode/QRI.png', patt: '/assets/QRCode/QRI.patt'},
    ]

    city_locations = [
        {
            lat: -22.410101,
            lng: -42.967093,
            title: 'Praça Olímpica Luís de Camões',
            icon: '/assets/image/icon/location.png',
            draggable: false,
        },
        {
            lat: -22.412468,
            lng: -42.965747,
            title: 'Igreja Matriz de Santa Teresa',
            icon: '/assets/image/icon/location.png',
            draggable: false,
        },
        {
            lat: -22.462654,
            lng: -42.986707,
            title: 'Mirante do Soberbo',
            icon: '/assets/image/icon/location.png',
            draggable: false,
        }
      ];

    sendMail(){
        var recipient="test";
        var at = String.fromCharCode(64);
        var dotcom="example.com";
        var mail="mailto:";
        window.open(mail+recipient+at+dotcom);
    }

    getCityLocations() {
        return this.city_locations;
    }
}