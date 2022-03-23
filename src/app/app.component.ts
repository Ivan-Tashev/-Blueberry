import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { UserService } from './core/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blueberry';
  constructor(private auth: AuthService, router: Router, private userService: UserService) {
    this.auth.user$.subscribe(data => {
      if (data) {
        userService.save(data);

        let returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl!);
      }
    });

  }
}
