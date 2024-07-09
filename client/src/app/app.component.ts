import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieListComponent } from './presentation/movie-list/movie-list.component';
import { MovieFormComponent } from './presentation/movie-form/movie-form.component';
import { UserFormComponent } from './presentation/user-form/user-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieListComponent, MovieFormComponent, UserFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'moviz';
}
