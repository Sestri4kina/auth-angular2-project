enum UserType {
    Admin,
    User,
    Guest
}

export class UserModel {
    userType: UserType;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}
