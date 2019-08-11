import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, Subscription } from 'rxjs';

import { Store } from 'store';
import { AuthService, User } from './auth/shared/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'fitness-app';

  user$: Observable<User>;
  subscription: Subscription;

  constructor(
    private store: Store,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // this.subscription = this.authService.isAuthenticated.subscribe();
    this.user$ = this.store.select<User>('user');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onLogout() {
    this.authService.logoutUser();
    this.router.navigate(['/auth/login']);
  }
}
