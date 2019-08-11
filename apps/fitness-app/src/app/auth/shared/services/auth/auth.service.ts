import { Injectable } from '@angular/core';
import { Store } from 'store';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

export interface User {
  id?: string;
  email: string;
  password: string;
  authenticated?: boolean;
}

@Injectable()
export class AuthService {
  isAuthenticated = false;

  constructor(private http: HttpClient, private store: Store) {}

  async registerUser(user: User) {
    if (!user) {
      this.store.set('user', null);
      return;
    }
    const userObj: User = {
      email: user.email,
      password: user.password,
      authenticated: true
    };
    await this.http.post(`${environment.apiUrl}/register`, userObj).subscribe(
      data => {
        console.log('POST Request is successful ', data);
        this.store.set('user', userObj);
        console.log('set store');
        this.isAuthenticated = true;
      },
      error => {
        console.log('Error', error);
      }
    );
  }

  loginUser(email: string, password: string) {
    console.log('User loged in', { email, password });
  }

  logoutUser() {
    return;
  }
}
