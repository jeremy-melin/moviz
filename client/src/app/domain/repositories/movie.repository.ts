import { Observable } from "rxjs";
import { MovieModel } from "../models/movie.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export abstract class MovieRepository {
    abstract getAllMovies(): Observable<Array<MovieModel>>;
    abstract getMovieByTitle(title: string): Observable<MovieModel>;
    abstract addMovie(movie: MovieModel): Observable<MovieModel>;
    abstract deleteMovie(id: string): void;
}
