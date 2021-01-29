import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private router: Router) {
    
    /* catch page change event */
    this.router.events.subscribe((ev) => {
        if (ev instanceof NavigationEnd) {
            var aux = this.router.url;
            this.url = aux.split('movie/')
        }
    });
  }

  url; 

  ngOnInit(): void {
  }

}
