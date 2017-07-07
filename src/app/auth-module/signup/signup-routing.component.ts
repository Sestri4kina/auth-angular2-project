import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './signup.component';

//The Routing Module pulls the routes into a variable. 
//The variable clarifies the routing module pattern in case you export the module in the future 
const signupRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
];
 
@NgModule({
  imports: [ RouterModule.forChild(signupRoutes) ],
  exports: [ RouterModule ]
})
export class SignupRoutingModule {}