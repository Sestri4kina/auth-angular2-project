import { Injectable } from '@angular/core';
import { UserModel } from '../user-model';

@Injectable()
export class UserService {
    login(user: UserModel): UserModel {
        return {
            "userType": user.userType,
            "email": user.email,
            "password": user.password,
            "firstName": user.firstName,
            "lastName": user.lastName
        };
    }

    signup(user: UserModel): UserModel {
        return {
            "userType": user.userType,
            "email": user.email,
            "password": user.password,
            "firstName": user.firstName,
            "lastName": user.lastName
        };
    }

    logout(): boolean {
        return true;
    }

    isLogged(): boolean {
        return true;
    }

    private _isAlreadyHave(user: UserModel): boolean {
        return true;
    }
}