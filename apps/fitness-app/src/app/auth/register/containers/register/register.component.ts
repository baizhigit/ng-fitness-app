import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'app/auth/shared/services/auth/auth.service';

@Component({
  selector: 'register',
  template: `
    <div>
      <auth-form (submitted)="registerUser($event)">
        <h1>Register</h1>
        <a routerLink="/auth/login">Already have an account?</a>
        <button type="submit">
          Create account
        </button>
        <div class="error" *ngIf="error">
          {{ error }}
        </div>
      </auth-form>
    </div>
  `
})
export class RegisterComponent {
  error: any;

  constructor(private authService: AuthService, private router: Router) {}

  // async registerUser(event: FormGroup) {
  //   const { email, password } = event.value;

  //   try {
  //     await this.authService.registerUser(email, password);
  //     this.router.navigate(['/']);
  //   } catch (error) {
  //     this.error = error.message || error;
  //   }
  // }
  async registerUser(event: FormGroup) {
    try {
      await this.authService.registerUser(event.value);
      this.router.navigate(['/']);
    } catch (error) {
      this.error = error.message || error;
    }
  }
}
