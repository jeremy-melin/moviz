import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import { GetMovies, GetMoviesSuccess } from './movies.actions';
import { MovieImplementationRepository } from './movie-implementation.repository';

@Injectable()
export class MoviesEffects {
  getMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetMovies),
      concatMap(() =>
        this.repository.getAllMovies().pipe(
          map(movies => GetMoviesSuccess({ movies }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private repository: MovieImplementationRepository
  ) {}
}