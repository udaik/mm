import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../shared/user';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    user: User = new User();

    constructor(private router: Router, private auth: AuthService) { }

    onRegister(): void {
        this.auth.register(this.user)
            .then((user) => {
                localStorage.setItem('token', user.json().auth_token);
                this.router.navigateByUrl('/status');

            })
            .catch((err) => {
                console.log(err);
            });
    }

    ngOnInit() {
    }

}
