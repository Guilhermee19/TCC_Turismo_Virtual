import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';

@Injectable({
    providedIn: 'root'
})

export class MovieService {

    constructor(private http : HttpClient) { }

    private url = "http://localhost:3000/"
    public id;

    allMovies() :Observable<Movie[]> {
        return this.http.get<Movie[]>(this.url+'movie');
    }
    
    getMovie(id) {
        return this.http.get<Movie[]>(this.url+'movie/'+id);
    }
    
    postNewMovie(name, image) {
        let body
        this.allMovies().subscribe(data => {
            var id = data.length;
            body = {
                id: id ,
                name: name,
                image: image,
            }
        })
        return this.http.post(`${this.url}/movie`, body);
	}

}