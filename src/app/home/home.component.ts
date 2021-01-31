import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { NewMovieComponent } from '../popup/new-movie/new-movie.component';
import { MovieService } from '../service/movie.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor( private movieService: MovieService,
                    private modalService: MDBModalService,
                    ) { }

    modalMovie: MDBModalRef;

    urlVideo;
    loading: boolean = false;
    loadingScreen: boolean = false;

    array_list;

    ngOnInit(): void {
        this.getAllMovie()
    }

    init(){
        document.getElementById('screen').style.overflowY="hidden";
        setTimeout(function(){
            document.getElementById('loading').style.opacity='0';
            document.getElementById('loading').style.transition=".5s";
            setTimeout(function(){
                document.getElementById('loading').style.display="none";
            }, 500);
        }, 3100);
    }

    getAllMovie(){
        this.movieService.allMovies().subscribe( data =>{
            this.array_list = data;
            //console.log(this.array_list)
            this.init()
        })
    }

    newMovie(){
        console.log('teste')
        /*
        this.modalMovie = this.modalService.show(NewMovieComponent, {
            backdrop: true,
            keyboard: true,
            focus: true,
            show: true,
            ignoreBackdropClick: false,
            class: 'modal-dialog-centered modal-sm',
            containerClass: '',
        })
        */
        /*
        this.modalMovie.content.action.subscribe( (result: any) => { 
            if(result == 'created'){

            }
        });
        */
    }
    
}

