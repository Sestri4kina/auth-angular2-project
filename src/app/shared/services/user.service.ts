import { BehaviorSubject, Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { User } from '../user-model';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
    _user: Subject<User> = new Subject();
    _users: Subject<User[]> = new Subject();
    constructor(private router: Router) { }

    // get user() {
        // return this._user.map(user => {
        //     return JSON.parse(localStorage.getItem('currentUser'));
        // });
    // }

    set user(_user: User) {
        localStorage.setItem("currentUser", JSON.stringify(_user))
        this._user.next(_user);
    }

    set users(_users: User[]) {
        localStorage.setItem("users", JSON.stringify(_users))
        this._users.next(_users);
    }

    login(user: User) {
        const res = new BehaviorSubject<User>(null);
        let users: User[] = localStorage.users !== undefined ? JSON.parse(localStorage.users) : [];
        
        if (!users.length) {
            res.error('You are not singed up, please, sign up firstly');
        }
        const loggedUser = users.find(_user => _user.email === user.email && _user.password === user.password);
        if (loggedUser) {
            this.user = loggedUser;
            res.next(loggedUser);
        } else {
            res.error('You are not singed up, please, sign up firstly');
        }

        return res;
    }

    signup(user: User) {
        const res = new BehaviorSubject<User>(null);
        let users: User[] = localStorage.users !== undefined ? JSON.parse(localStorage.users) : [];

        const signedUser = user;
        if (signedUser) {
            this.users = [...users, signedUser];
            res.next(signedUser);
        } else {
            res.error('Please sing up');
        }

        return res;

        /*
        let users: User[] = localStorage.users !== undefined ? JSON.parse(localStorage.users) : [];
       
        if (this._isAlreadyHave(user)) {
            alert("You are already sign up, please, log in instead");
            this.router.navigate(['/auth/login']);
        } else {
            users.push(user);
        }
        localStorage.setItem("users", JSON.stringify(users));
        alert("Congratulations! You are signed up.");
        this.router.navigate(['/home']);
        */
    }

    logout() {
        const res = new BehaviorSubject<boolean>(false);
        this.user = null;
        res.next(true);
        return res;
        // localStorage.removeItem("currentUser");
        // alert("You are log out!");
        // this.router.navigate(['/home']);
    }

    isLogged(): boolean {
        let currentUser = localStorage.currentUser !== undefined ? JSON.parse(localStorage.currentUser) : null;
        
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
