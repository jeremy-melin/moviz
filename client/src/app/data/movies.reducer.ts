import { createReducer, on } from "@ngrx/store";
import { MovieModel } from "../domain/models/movie.model";
import { GetMoviesSuccess } from "./movies.actions";

export interface State {
    movies: Array<MovieModel>
}

export const initialState: State = {
    movies: [],
};

export const moviesReducer = createReducer(
    initialState,
    on(GetMoviesSuccess, (state, { movies }): { movies: Array<MovieModel>; } => {
    return {...state, movies: movies}})
)