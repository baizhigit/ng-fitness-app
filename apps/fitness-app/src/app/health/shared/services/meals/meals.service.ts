import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Store } from 'store';
import { environment } from 'environments/environment';

export interface Meal {
  id: number;
  name: string;
  ingredients: string[];
  timestamp: number;
}

@Injectable()
export class MealsService {
  userId = this.store.state.user.email;

  meals$: Observable<any> = this.http
    .get(`${environment.apiUrl}/user/${this.userId}/meals`)
    .pipe(
      tap(next => {
        this.store.set('meals', next);
      })
    );

  constructor(
    private store: Store,
    private http: HttpClient,
    private router: Router
  ) {}

  async addMeal(meal: Meal) {
    await this.http
      .post(`${environment.apiUrl}/meals`, {
        ...meal,
        userId: this.userId
      })
      .subscribe(
        data => {
          console.log('Meal saved', data);

          this.router.navigate(['meals']);
        },
        error => {
          return error;
        }
      );
  }

  async removeMeal(id: number) {
    await this.http.delete(`${environment.apiUrl}/meals/${id}`).subscribe(
      data => {
        console.log('Meal deleted', data);

        this.router.navigate(['meals']);
      },
      error => {
        return error;
      }
    );
  }
}
