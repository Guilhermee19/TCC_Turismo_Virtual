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

    sendMail(){
        var recipient="test";
        var at = String.fromCharCode(64);
        var dotcom="example.com";
        var mail="mailto:";
        window.open(mail+recipient+at+dotcom);
    }
}