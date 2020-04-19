import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './AppRouting';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

import { SecurityGuardGuard } from "./security-guard.guard"
import { AuthService } from "./auth.service";
import { MerchantComponent } from './merchant/merchant.component'
import { DeactivateGuard } from './deactivate.guard';
import { CustomerComponent } from './customer/customer.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { ActivatechildGuard } from './activatechild.guard';


@NgModule( {
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    MerchantComponent,
    CustomerComponent,
    AddcustomerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( routes )
  ],
  providers: [ SecurityGuardGuard, DeactivateGuard, ActivatechildGuard, AuthService ],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
