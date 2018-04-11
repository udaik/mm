export class User {
    email = '';
    password = '';
    constructor(e?: string, p?: string) {
        this.email = e;
        this.password = p;
    }
}
