import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MoviesStore } from '../../data/movies.store';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MatButtonModule, MatListModule],
  providers: [MoviesStore],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {

  readonly store = inject(MoviesStore);

  async ngOnInit() {
    this.store.getAllMovies();
  }

  deleteMovie(id: string | undefined) {
    // this.repository.deleteMovie(id ?? "0").subscribe();
  }

}
