import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from '../../shared/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    @Input() user: User;
    loginForm: FormGroup;

    constructor(private router: Router,
        private auth: AuthService,
        private fb: FormBuilder) {
        this.user = new User();
        this.createForm();
    }

    ngOnInit() { }

    onLogin(): void {
        const email = this.loginForm.get('email').value;
        const password = this.loginForm.get('password').value;

        this.auth.login(new User(email, password))
            .then((user) => {
                localStorage.setItem('token', user.json().auth_token);
                this.router.navigateByUrl('/status');
            })
            .catch((err) => {
                console.log(err);
            });
    }

    createForm() {
        this.loginForm = this.fb.group({
            email: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])]
        });
    }

    rebuildForm() {
        this.loginForm.reset({
        });
    }

    revert() {
        this.rebuildForm();
    }
}
