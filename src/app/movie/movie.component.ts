import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MovieService } from '../service/movie.service';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

    constructor(private router: Router,
                private movieService: MovieService) {
        
        /* catch page change event */
        this.router.events.subscribe((ev) => {
            if (ev instanceof NavigationEnd) {
                var aux = this.router.url;
                this.idMovie = aux.split('movie/')
            }
        });
    }
    
    loading: boolean = false;
    idMovie; 

    ngOnInit(): void {
        this.getMovie(this.idMovie[1])
    }

    getMovie(id){
        this.movieService.getMovie(id).subscribe( data => {
            console.log(data)
        })
    }

}
