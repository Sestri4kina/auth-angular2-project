import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthModule } from './auth-module/auth.module';
import { AuthGuard } from 'app/shared/services/auth-guard.service'
 
//The Routing Module pulls the routes into a variable. 
//The variable clarifies the routing module pattern in case you export the module in the future 
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { 
      path: 'admin', 
      component: AdminComponent,
      canActivate: [ AuthGuard ],
  },
  { path: 'profile', component: ProfileComponent },
  { path: 'auth', loadChildren: 'app/auth-module/auth.module#AuthModule' },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
/*
  { path: 'admin', component: 'app/admin/admin.module#AdminModule' },
  { path: 'user', component: ProfileComponent },
*/