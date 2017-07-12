import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

//The Routing Module pulls the routes into a variable. 
//The variable clarifies the routing module pattern in case you export the module in the future 
const authRoutes: Routes = [
  {
    
        path: '',
        children: [
          { path: '', redirectTo:'login',pathMatch:'full' },
          { path: 'login', component: LoginComponent },
          { path: 'signup', component: SignupComponent },
          { path: 'forgot_password', component: ForgotPasswordComponent }
        ]
      
  }
];
 
@NgModule({
  imports: [ RouterModule.forChild(authRoutes) ],
  exports: [ RouterModule ]
})
export class AuthRoutingModule {}
