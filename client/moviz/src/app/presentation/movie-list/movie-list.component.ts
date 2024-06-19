import { Component, inject } from '@angular/core';
import { MovieModel } from '../../domain/models/movie.model';
import { MovieImplementationRepository } from '../../data/movie-implementation.repository';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {

  repository = inject(MovieImplementationRepository);
  movies: Array<MovieModel> = [];

  async ngOnInit() {
    this.repository.getAllMovies().subscribe(movies => {
      console.log("movies", movies);
      this.movies = movies || [];
    });
  }

}
