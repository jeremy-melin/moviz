import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MovieImplementationRepository } from '../../data/movie-implementation.repository';
import { MovieModel } from '../../domain/models/movie.model';

@Component({
  selector: 'app-movie-form',
  standalone: true,
  imports: [ReactiveFormsModule],
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
    console.log("form state : ", this.movieForm.value);

    this.repository.addMovie(this.movieForm.value as MovieModel).subscribe(data => {
      console.log("returned data from server : ", data);
    });
  }

}
