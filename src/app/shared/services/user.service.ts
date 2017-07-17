import { Injectable } from '@angular/core';
import { User } from '../user-model';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
    constructor(private router: Router) { }
    redirectUrl: string;

    login(user: User): void {
        let users = localStorage.users !== undefined ? JSON.parse(localStorage.users) : [];
        
        if (users.length === 0) {
            alert("You are not singed up, please, sign up firstly");
            this.router.navigate(['/auth/signup']);
        } else {
            for (let i = 0; i < users.length; i++) {
                
                if (user.email == users[i].email && user.password == users[i].password) {
                    localStorage.setItem("currentUser", JSON.stringify(user));
                    alert("Congratulations! You are logged in.");
                    this.router.navigate(['/home']);
                } else if ((user.email === users[i].email && user.password !== users[i].password) ||  (user.email !== users[i].email && user.password === users[i].password)) {
                    alert("You entered a wrong email or password");
                } 
            }
        }
    }

    signup(user: User): void {
        let users = localStorage.users !== undefined ? JSON.parse(localStorage.users) : [];
       
        if (this._isAlreadyHave(user)) {
            alert("You are already sign up, please, log in instead");
            this.router.navigate(['/auth/login']);
        } else {
            users.push(user);
        }
        localStorage.setItem("users", JSON.stringify(users));
        alert("Congratulations! You are signed up.");
        this.router.navigate(['/home']);
    }

    logout(): void {
        localStorage.removeItem("currentUser");
        alert("You are log out!");
        this.router.navigate(['/home']);
    }

    isLogged(): boolean {
        let currentUser = JSON.parse(localStorage.currentUser) || null;
        
        return currentUser !== null;
    }

    private _isAlreadyHave(user: User): boolean {
        let users = localStorage.users !== undefined ? JSON.parse(localStorage.users) : [];

        if (users.length === 0) {
            return false;
        } else {
            for (let i = 0; i < users.length; i++) {
                if (user.email === users[i].email) {
                    return true;
                } 
            }
            return false;
        }
    }
}
