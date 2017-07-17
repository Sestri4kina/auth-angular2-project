import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthModule } from './auth-module/auth.module';
 
//The Routing Module pulls the routes into a variable. 
//The variable clarifies the routing module pattern in case you export the module in the future 
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'auth', loadChildren: 'app/auth-module/auth.module#AuthModule'},
  { path: 'admin', component: AdminComponent },
  {path: '{{currentUser.firstName}}', component: ProfileComponent},
  { path: '404', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
