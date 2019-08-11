import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'app/auth/shared/services/auth/auth.service';

@Component({
  selector: 'login',
  template: `
    <div>
      <auth-form (submitted)="loginUser($event)">
        <h1>Login</h1>
        <a routerLink="/auth/register">Not registered?</a>
        <button type="submit">
          Login
        </button>
      </auth-form>
    </div>
  `
})
export class LoginComponent {
  error: any;

  constructor(private authService: AuthService, private router: Router) {}

  async loginUser(event: FormGroup) {
    const { email, password } = event.value;

    try {
      await this.authService.loginUser(email, password);
      this.router.navigate(['/']);
    } catch (error) {
      this.error = error.message || error;
    }
  }
}
