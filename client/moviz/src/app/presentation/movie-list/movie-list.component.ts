import { Component, inject } from '@angular/core';
import { MovieImplementationRepository } from '../../data/movie-implementation.repository';
import { MovieModel } from '../../domain/models/movie.model';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {

  movies: Array<MovieModel> = [];
  movieRepository = inject(MovieImplementationRepository);

  async ngOnInit() {
    this.movieRepository.getAllMovies().subscribe(movies => {
      this.movies = movies || [];
    });
  }

}
