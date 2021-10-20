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

    ngOnInit(): void {
    }

}
