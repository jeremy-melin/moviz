import { MovieRepository } from "../repositories/movie.repository";

export class ListMovieUseCase {

    constructor(private readonly movieRepository: MovieRepository) {}

    async handle() {
        const movies = await this.movieRepository.getAllMovies();
        return movies;
    }
}