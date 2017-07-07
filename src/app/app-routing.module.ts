import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
//The Routing Module pulls the routes into a variable. 
//The variable clarifies the routing module pattern in case you export the module in the future 
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}