import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Store } from 'store';

// feature modules
import { AuthModule } from './auth/auth.module';

// containers
import { AppComponent } from './app.component';

// components
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';

//routes
export const routes: Routes = [];

@NgModule({
  declarations: [AppComponent, AppNavComponent, AppHeaderComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    AuthModule
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule {}
