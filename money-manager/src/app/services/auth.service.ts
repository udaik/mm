import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { User } from '../shared/user';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
    private BASE_URL = 'http://localhost:8000/auth';
    private headers: Headers = new Headers({ 'Content-Type': 'application/json' });

    test(): string {
        return 'working';
    }

    constructor(private http: Http) { }

    login(user: User): Promise<any> {
        const url = `${this.BASE_URL}/login`;
        return this.http.post(url, user, { headers: this.headers }).toPromise();
    }

    register(user: User): Promise<any> {
        const url = `${this.BASE_URL}/register`;
        return this.http.post(url, user, { headers: this.headers }).toPromise();
    }

    ensureAuthenticated(token): Promise<any> {
        const url = `${this.BASE_URL}/status`;
        const headers: Headers = new Headers({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        });
        return this.http.get(url, { headers: headers }).toPromise();
    }
}
