import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {

    constructor(public modalRef: MDBModalRef) { }

    action: Subject<any> = new Subject();

    ngOnInit(): void {
    }

    doHide() {
        this.modalRef.hide();
        this.action.next('created')
    }
}
