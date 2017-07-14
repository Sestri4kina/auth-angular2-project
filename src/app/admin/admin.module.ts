import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AdminComponent } from './admin.component';

import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    //BrowserAnimationsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  providers: [],
  exports: []
})
export class AdminModule { }
