import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-virtual-environment',
    templateUrl: './virtual-environment.component.html',
    styleUrls: ['./virtual-environment.component.css']
})
export class VirtualEnvironmentComponent implements OnInit {

    constructor() { }

    position: string;
    sunLight: number;
    
    ngOnInit(): void {
        
    }

}
