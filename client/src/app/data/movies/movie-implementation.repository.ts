import { Injectable } from "@angular/core";
import { MovieRepository } from "../../domain/repositories/movie.repository";
import { Observable } from "rxjs";
import { MovieModel } from "../../domain/models/movie.model";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: 'root',
})
export class MovieImplementationRepository extends MovieRepository {
    
    protected URI = 'https://localhost:7179/api/movie';
    
    constructor(private http: HttpClient) {
        super();
    }
    
    override getAllMovies(): Observable<MovieModel[]> {
        return this.http.get<MovieModel[]>(this.URI);
    }

    override getMovieByTitle(title: string): Observable<MovieModel> {
        return this.http.get<MovieModel>(this.URI, {params: {title}});
    }

    override addMovie(movie: MovieModel): Observable<MovieModel> {
        return this.http.post<MovieModel>(this.URI, movie, {});
    }

    override deleteMovie(id: string): Observable<MovieModel> {
        return this.http.delete(this.URI + "/" + id);
    }
}