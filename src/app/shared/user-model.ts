enum UserType {
    Admin,
    User,
    Guest
}

interface UserInterface {
    userType: UserType;
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
}

export class User implements UserInterface {
    userType: UserType;
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
}
