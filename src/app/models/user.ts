export class User {
    firstName: string = '';
    lastName: string = '';
    personId: string = '';
    email: string = '';
    username: string = '';
    password: string = '';
    confirmPassword: string = '';
    termsAccepted: boolean = false;

    constructor(init?: Partial<User>) {
        Object.assign(this, init);
      }
}