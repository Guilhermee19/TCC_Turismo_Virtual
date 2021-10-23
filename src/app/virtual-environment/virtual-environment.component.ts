import { Component, OnInit, ViewChild } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
declare var JoyStick: any;

@Component({
    selector: 'app-virtual-environment',
    templateUrl: './virtual-environment.component.html',
    styleUrls: ['./virtual-environment.component.css']
})
export class VirtualEnvironmentComponent implements OnInit {

    constructor(
        private deviceService: DeviceDetectorService
    ) { }

    @ViewChild('joy3Div', {static: true}) joy3Div;

    array={x: 0, y:0, z:0}
    save_array={x: 0, y:0, z:0}
    position: string;
    sunLight: number;
    
    joy3IinputPosX
    joy3InputPosY
    joy3Direzione
    joy3X
    joy3Y
    
    component
    isMobile

    ngOnInit(): void {
        this.isMobile = this.deviceService.isMobile() || this.deviceService.isTablet();
    }

    objectToPos(posPbjetc){
        return `${posPbjetc.x} ${posPbjetc.y} ${posPbjetc.z}`
    }

    clickHandler(value){
        switch(value){
            case 'W': 
                this.array.z -= 2;
                break;
            case 'D': 
                this.array.x += 2;
                break;
            case 'S': 
                this.array.z += 2;
                break;
            case 'A': 
                this.array.x -= 2;
                break;
        }

        let cameraRig = document.querySelector('#camera-rig')
        cameraRig.setAttribute('animation', `property: position; from: ${this.save_array.x} ${this.save_array.y} ${this.save_array.z}; to: ${this.array.x} ${this.array.y} ${this.array.z}; dur: 200`)
        this.save_array.x = this.array.x
        this.save_array.y = this.array.y
        this.save_array.z = this.array.z

        console.log(this.save_array.x, this.save_array.y, this.save_array.z)
    }

}
