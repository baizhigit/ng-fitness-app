import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// containers
import { WorkoutsComponent } from './containers/workouts/workouts.component';

const routes: Routes = [{ path: '', component: WorkoutsComponent }];

@NgModule({
  declarations: [WorkoutsComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [],
  providers: []
})
export class WorkoutsModule {}
