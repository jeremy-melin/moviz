import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MovieImplementationRepository } from '../../data/movies/movie-implementation.repository';
import { MovieModel } from '../../domain/models/movie.model';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-movie-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.scss'
})
export class MovieFormComponent {

  repository = inject(MovieImplementationRepository);

  movieForm = new FormGroup({
    title: new FormControl("", {nonNullable: true}),
    year: new FormControl("", {nonNullable: true})
  });

  onSubmit(): void {
    this.repository.addMovie(this.movieForm.value as MovieModel).subscribe();
  }

}
