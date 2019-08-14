import { Observable, BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';

import { User } from 'app/auth/shared/services/auth/auth.service';
import { Meal } from 'app/health/shared/services/meals/meals.service';

export interface State {
  user: User;
  meals: Meal[];
  [key: string]: any;
}

const state: State = {
  user: { id: null, email: null, password: null, authenticated: false },
  meals: undefined
};

export class Store {
  private subject = new BehaviorSubject<State>(state);
  private store$ = this.subject.asObservable().pipe(distinctUntilChanged());

  get value() {
    return this.subject.value;
  }

  get state() {
    return this.subject.getValue();
  }

  select<T>(name: string): Observable<T> {
    return this.store$.pipe(pluck(name));
  }

  set(name: string, state: any) {
    this.subject.next({ ...this.value, [name]: state });
  }
}
