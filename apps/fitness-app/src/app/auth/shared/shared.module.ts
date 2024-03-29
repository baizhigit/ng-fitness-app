import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { AuthFormComponent } from './components/auth-form/auth-form.component';

// services
import { AuthService } from './services/auth/auth.service';

// guards
import { AuthGuard } from './guards/auth.guards';

@NgModule({
  declarations: [AuthFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [AuthFormComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [AuthService, AuthGuard]
    };
  }
}
