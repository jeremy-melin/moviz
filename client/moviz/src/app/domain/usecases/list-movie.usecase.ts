import { Injectable } from "@angular/core";
import { MovieImplementationRepository } from "../../data/movie-implementation.repository";

@Injectable({
    providedIn: "root",
})
export class ListMovieUseCase {

    constructor(private readonly movieRepository: MovieImplementationRepository) {}

    async handle() {
        this.movieRepository.getAllMovies();
    }
}