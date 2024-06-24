import { createAction, props } from '@ngrx/store';
import { MovieModel } from '../domain/models/movie.model';

export const GetMovies = createAction(
  '[Movies] Get movies'
);

export const GetMoviesSuccess = createAction(
    '[Movies] Get movies success',
    props<{ movies: Array<MovieModel>; }>()
);