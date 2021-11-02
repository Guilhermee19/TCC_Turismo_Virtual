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
            id: 1,
            ra: true,
            tour: true,
            lat: -22.410101,
            lng: -42.967093,
            title: 'Praça Olímpica Luís de Camões',
            icon: '/assets/image/icon/location.png',
            draggable: false,
        },
        {
            id: 2,
            ra: false,
            tour: false,
            lat: -22.412468,
            lng: -42.965747,
            title: 'Igreja Matriz de Santa Teresa',
            icon: '/assets/image/icon/location.png',
            draggable: false,
        },
        {
            id: 3,
            ra: false,
            tour: false,
            lat: -22.411422,
            lng: -42.967022,
            title: 'Calçada da Fama',
            icon: '/assets/image/icon/location.png',
            draggable: false,
        },
        {
            id: 4,
            ra: false,
            tour: false,
            lat: -22.407502,
            lng: -42.967421,
            title: 'Castelo Montebello',
            icon: '/assets/image/icon/location.png',
            draggable: false,
        },
        {
            id: 5,
            ra: false,
            tour: false,
            lat: -22.442533,
            lng: -42.979594,
            title: 'Feirinha do Alto',
            icon: '/assets/image/icon/location.png',
            draggable: false,
        },
        {
            id: 6,
            ra: false,
            tour: false,
            lat: -22.462654,
            lng: -42.986707,
            title: 'Mirante do Soberbo',
            icon: '/assets/image/icon/location.png',
            draggable: false,
        },
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