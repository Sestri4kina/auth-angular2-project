import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForgotPasswordComponent } from './forgot-password.component';

//The Routing Module pulls the routes into a variable. 
//The variable clarifies the routing module pattern in case you export the module in the future 
const forgotPasswordRoutes: Routes = [
  { path: 'forgot_password', component: ForgotPasswordComponent },
];
 
@NgModule({
  imports: [ RouterModule.forChild(forgotPasswordRoutes) ],
  exports: [ RouterModule ]
})
export class ForgotPasswordRoutingModule {}