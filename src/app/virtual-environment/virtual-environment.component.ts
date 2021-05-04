import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-virtual-environment',
    templateUrl: './virtual-environment.component.html',
    styleUrls: ['./virtual-environment.component.css']
})
export class VirtualEnvironmentComponent implements OnInit {

    constructor() { }

    position: string;

    
    ngOnInit(): void {
        this.position = '0 1.6 0';
    }

}
