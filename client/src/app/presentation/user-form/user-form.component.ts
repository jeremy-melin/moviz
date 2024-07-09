import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StrongPasswordRegx } from '../../domain/password-regex';
import { CommonModule } from '@angular/common';
import { UserStore } from '../../data/users/users.store';
import { UserForResgitration } from '../../domain/models/user.model';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  readonly store = inject(UserStore);

  userForm = new FormGroup({
    firstname: new FormControl("", {nonNullable: true}),
    lastname: new FormControl("", {nonNullable: true}),
    email: new FormControl("", {nonNullable: true}),
    password: new FormControl<string>("", {
      validators: [Validators.required, Validators.pattern(StrongPasswordRegx)]
    }),
    confirmPassword: new FormControl<string>('', { validators: Validators.required} ),
  });

  onSubmit(): void {
    this.store.addUser(this.userForm.value as UserForResgitration);
  }
}
