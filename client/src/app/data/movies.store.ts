import { MovieModel } from '../domain/models/movie.model';
import { MovieImplementationRepository } from './movie-implementation.repository';

import { inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withMethods,
  withState,
} from '@ngrx/signals';


export interface MoviesState {
    movies: Array<MovieModel>
}

export const initialState: MoviesState = {
    movies: [],
};

export const MoviesStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store, repository = inject(MovieImplementationRepository)) => ({
        async getAllMovies() {
            return repository.getAllMovies().subscribe(movies => patchState(store, { movies }))
        }
    })
)
);

