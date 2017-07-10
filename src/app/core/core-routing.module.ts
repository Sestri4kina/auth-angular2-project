import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { HomeComponent } from './home/home.component';

//The Routing Module pulls the routes into a variable. 
//The variable clarifies the routing module pattern in case you export the module in the future 
const coreRoutes: Routes = [
  { path: 'home', component: HomeComponent },
];
 
@NgModule({
  imports: [ RouterModule.forChild(coreRoutes) ],
  exports: [ RouterModule ]
})
export class CoreRoutingModule {}