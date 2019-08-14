import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import { Store } from 'store';

import {
  MealsService,
  Meal
} from '../../../shared/services/meals/meals.service';

@Component({
  selector: 'meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent implements OnInit, OnDestroy {
  meals$: Observable<Meal[]>;
  subscripton: Subscription;

  constructor(private store: Store, private mealsService: MealsService) {}

  ngOnInit(): void {
    this.meals$ = this.store.select<Meal[]>('meals');
    this.subscripton = this.mealsService.meals$.subscribe();
  }

  ngOnDestroy(): void {
    this.subscripton.unsubscribe();
  }

  removeMeal(event: Meal) {
    const { id } = event;
    this.mealsService.removeMeal(id);
    console.log('Remove: ', event);
  }
}
