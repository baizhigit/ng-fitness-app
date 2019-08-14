import { Component } from '@angular/core';

import {
  Meal,
  MealsService
} from 'app/health/shared/services/meals/meals.service';

@Component({
  selector: 'meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent {
  constructor(private mealService: MealsService) {}

  addMeal(event: Meal) {
    this.mealService.addMeal(event);
    // this.backToMeals();
  }

  // backToMeals() {
  //   this.router.navigate(['meals']);
  // }
}
