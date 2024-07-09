import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { User, UserForResgitration } from "../../domain/models/user.model";
import { UserImplementationRepository } from "./user-implementation.repository";
import { inject } from "@angular/core";

export interface UserState {
    user: User;
}

export const initialState: UserState = {
    user: { firstname: '', lastname: '', email: ''}
}   

export const UserStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store, repository = inject(UserImplementationRepository)) => ({
        async addUser(user: UserForResgitration) {
            return repository.addUser(user).subscribe(user => patchState(store, { user : { firstname: user.firstname, lastname: user.lastname, email : user.email } }))
        }
    }))
);