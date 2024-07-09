export interface User {
 firstname: string;
 lastname: string;
 email: string;
}


export interface UserForResgitration {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirmPassword?: string;
}