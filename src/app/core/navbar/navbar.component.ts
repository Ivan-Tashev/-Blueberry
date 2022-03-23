import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // public service to be accessiable 
  constructor(public auth: AuthService) { }

  logout() {
    this.auth.logout();
  }
}
