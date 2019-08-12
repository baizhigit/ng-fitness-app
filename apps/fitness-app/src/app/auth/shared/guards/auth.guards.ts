import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from 'store';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store) {}
  canActivate() {
    if (!this.store.value.user.authenticated) {
      this.router.navigate(['/auth/login']);
    }
    return this.store.value.user.authenticated;
  }
}
