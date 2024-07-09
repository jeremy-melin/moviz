import { HttpClient } from "@angular/common/http";
import { UserRepository } from "../../domain/repositories/user.repository";
import { Observable } from "rxjs";
import { UserForResgitration } from "../../domain/models/user.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {
    
    protected URI = 'https://localhost:7179/api/accounts';

    constructor(private http: HttpClient) {
        super();
    }

    override addUser(user: UserForResgitration): Observable<UserForResgitration> {
        return this.http.post<UserForResgitration>(this.URI, user, {});
    }
}