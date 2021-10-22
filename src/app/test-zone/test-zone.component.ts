import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-zone',
  templateUrl: './test-zone.component.html',
  styleUrls: ['./test-zone.component.css']
})
export class TestZoneComponent implements OnInit {

  constructor() { }

  metaChar;
  exampleKey;


  ngOnInit(): void {
    this.metaChar = false;
    this.exampleKey = 16;
  }

  keyEvent(event) {
   
    var key = event.keyCode || event.which;
    var keychar = String.fromCharCode(key);
    if (key == this.exampleKey) {
      this.metaChar = true;
    }
    if (key != this.exampleKey) {
      if (this.metaChar) {
        alert("Combination of metaKey + " + keychar);
        this.metaChar = false;
      } else {
        alert("Key pressed " + key);
      }
    }
  }

  metaKeyUp (event) {
    var key = event.keyCode || event.which;
  
    if (key == this.exampleKey) {
      this.metaChar = false;
    }
  }

}
