import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// shared modules
import { SharedModule } from './shared/shared.module';

// guards
import { AuthGuard } from 'app/auth/shared/guards/auth.guards';

const routes: Routes = [
  {
    path: 'schedule',
    canActivate: [AuthGuard],
    loadChildren: './schedule/schedule.module#ScheduleModule'
  },
  {
    path: 'meals',
    canActivate: [AuthGuard],
    loadChildren: './meals/meals.module#MealsModule'
  },
  {
    path: 'workouts',
    canActivate: [AuthGuard],
    loadChildren: './workouts/workouts.module#WorkoutsModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule.forRoot()]
})
export class HealthModule {}
