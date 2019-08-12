import { Injectable } from '@angular/core';
import { Store } from 'store';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';

export interface User {
  id?: string;
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private store: Store,
    private router: Router
  ) {}

  async registerUser(user: User) {
    if (!user) {
      this.store.set('user', null);
      return;
    }
    const userObj: User = {
      email: user.email,
      password: user.password
    };
    return await this.http
      .post(`${environment.apiUrl}/register`, userObj)
      .subscribe(
        data => {
          console.log('POST Request is successful ', data);
          this.store.set('user', { ...userObj, authenticated: true });
          console.log('set store');
          this.router.navigate(['/']);
        },
        error => {
          console.error('Error', error);
        }
      );
  }

  async loginUser(email: string, password: string) {
    return await this.http
      .post(`${environment.apiUrl}/login`, { email, password })
      .subscribe(
        data => {
          console.log('User successfully logged in', data);
          this.store.set('user', { email, password, authenticated: true });
          console.log('set store');

          this.router.navigate(['/']);
        },
        error => {
          return error;
        }
      );
  }

  logoutUser() {
    console.log('... Loggin out');
    return this.store.set('user', null);
  }
}
