import { Component, OnInit } from '@angular/core';
// import * as THREE from '../../assets/libs/three.js';
// declare var THREE: any;

@Component({
    selector: 'app-detection-qrcode',
    templateUrl: './detection-qrcode.component.html',
    styleUrls: ['./detection-qrcode.component.css']
})
export class DetectionQrcodeComponent implements OnInit {

    constructor() { }

    qrcode: boolean = false;

    list=[
        {name: 'Dedo de Deus', code:'modelo_01'},
        {name: 'Monumento olímpico', code:'modelo_02'}
    ]
    select: string = '';

    ngOnInit(): void {
        if(localStorage.getItem('check_termo') == null || localStorage.getItem('check_termo') == 'false'){
            localStorage.setItem('check_termo', 'false')
            this.qrcode = false;
        }
        else{
            this.qrcode = true;
        }
        let code = localStorage.getItem('code')
        this.select = code != null ? code : this.list[0].code;
        console.log(this.select)

    }

    checkTermo(){
        localStorage.setItem('check_termo', 'true')
        this.qrcode = true;
    }

    selectModelo(item){
        this.select = item
        localStorage.setItem('code', item)
    }
}
