import { createSelector } from '@ngrx/store';
import { MovieModel } from '../domain/models/movie.model';
import { signalStore, withHooks, withState } from '@ngrx/signals';

export interface AppState {
  movies: MovieModel[];
}

export const initialState = {
  movies: []
}

export const MoviesStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
);

export const selectAllMovies = (state: AppState) => state.movies;

