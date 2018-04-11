import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../shared/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    test = 'just a test';

    user: User = new User();


    constructor(private router: Router, private auth: AuthService) { }

    ngOnInit() { }

    onLogin(): void {
        this.auth.login(this.user)
            .then((user) => {
                localStorage.setItem('token', user.json().auth_token);
                this.router.navigateByUrl('/status');
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
