import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: AuthService) { }

  loginGoogle() { // sign in with Google
    this.auth.loginGoogle();
  }
  loginFacebook() { // sign in with Facebook
    this.auth.loginFacebook;
  }
}
