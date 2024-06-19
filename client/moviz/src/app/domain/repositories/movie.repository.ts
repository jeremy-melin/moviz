import { Observable } from "rxjs";
import { MovieModel } from "../models/movie.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export abstract class MovieRepository {
    abstract getAllMovies(): Observable<Array<MovieModel>>;
}
