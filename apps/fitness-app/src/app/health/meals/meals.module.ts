import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// containers
import { MealsComponent } from './containers/meals/meals.component';

const routes: Routes = [{ path: '', component: MealsComponent }];

@NgModule({
  declarations: [MealsComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [],
  providers: []
})
export class MealsModule {}
