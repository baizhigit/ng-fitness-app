import { Observable, BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';

import { User } from 'app/auth/shared/services/auth/auth.service';

export interface State {
  user: User;
  [key: string]: any;
}

const state: State = {
  user: { email: null, password: null, authenticated: false }
};

export class Store {
  private subject = new BehaviorSubject<State>(state);
  private store$ = this.subject.asObservable().pipe(distinctUntilChanged());

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store$.pipe(pluck(name));
  }

  set(name: string, state: any) {
    this.subject.next({ ...this.value, [name]: state });
  }
}
