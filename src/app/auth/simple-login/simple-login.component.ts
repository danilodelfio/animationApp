import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../shared/auth.service';

@Component({
    selector: 'app-simple-login',
    templateUrl: './simple-login.component.html',
    styleUrls: ['./simple-login.component.css']
})
export class LoginComponent implements OnInit {
    credentials = { username : '', password: '' };
    successMessage = '';
    errorMessage = '';


    constructor(private service: AuthService, private router: Router) {}
    ngOnInit() {}

    /**
     * Login a user
     */
    login() {
        this.errorMessage = '';
        this.service.login(this.credentials.username, this.credentials.password)
            .subscribe(
                data => {
                    alert('Login successfull');
                    this.router.navigate(['/home']);
                },
                err => {
                    this.errorMessage = err;
                }
            )
    }

    logout() {
      this.service.logout();
      alert('Loggin out ' + this.service.isLoggedIn());
    }

    get isLogged() {
      return this.service.isLoggedIn();
    }
}
