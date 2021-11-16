import { Component, OnInit, ViewChild } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-test-zone',
  templateUrl: './test-zone.component.html',
  styleUrls: ['./test-zone.component.css']
})
export class TestZoneComponent implements OnInit {

  constructor(
    private deviceService: DeviceDetectorService
  ) { }

  @ViewChild('joy3Div', {static: true}) joy3Div;

  array={x: 0, y:2, z:0}
  save_array={x: 0, y:2, z:0}
  position: string;
  angulo: number;

  isMobile

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile() || this.deviceService.isTablet();
    // this.isMobile = true;
  }

  ctToPos(posPbjetc){
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
