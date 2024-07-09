import { Injectable } from "@angular/core";
import { UserForResgitration } from "../models/user.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export abstract class UserRepository {
    abstract addUser(user: UserForResgitration): Observable<UserForResgitration>;
}
