import { Injectable } from '@angular/core';
import { User } from '../user-model';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
    constructor(private router: Router) { }

    login(user: User): void {
        let users = localStorage.users !== undefined ? JSON.parse(localStorage.users) : [];

        if (users.length === 0) {
            alert("You are not singed up, please, sign up firstly");
            this.router.navigate(['/auth/signup']);
        } else {
            for (let i = 0; i < users.length; i++) {
                if (user.email === users[i].email && user.password === users[i].password) {
                    localStorage.setItem("currentUser", JSON.stringify(user));
                } else if (user.email === users[i].email && user.password !== users[i].password) {
                    alert("You entered a wrong password");
                    return;
                } else if (user.email !== users[i].email && user.password === users[i].password) {
                    alert("You entered a wrong email");
                    return;
                } else if (user.email !== users[i].email && user.password !== users[i].password) {
                    alert("There is no user with such email and password");
                    return;
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
    }

    logout(): void {
        localStorage.setItem("currentUser", JSON.stringify({}));
    }

    isLogged(): boolean {
        let currentUser = localStorage.currentUser !== undefined ? JSON.parse(localStorage.currentUser) : {};
        
        return Object.keys(currentUser).length === 0 && currentUser.constructor === Object;
    }

    private _isAlreadyHave(user: User): boolean {
        let users = localStorage.users !== undefined ? JSON.parse(localStorage.users) : [];

        if (users.length === 0) {
            return false;
        } else {
            for (let i = 0; i < users.length; i++) {
                if (user.email === users[i].email) {
                    return true;
                } else {
                    return false;
                } 
            }
        }
    }
}
