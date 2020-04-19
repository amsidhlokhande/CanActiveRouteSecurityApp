import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { SecurityGuardGuard } from './security-guard.guard';
import { MerchantComponent } from './merchant/merchant.component';
import { DeactivateGuard } from './deactivate.guard';
import { CustomerComponent } from './customer/customer.component';
import { ActivatechildGuard } from './activatechild.guard';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate: [ SecurityGuardGuard ] },
  { path: 'marchant', component: MerchantComponent, canDeactivate: [ DeactivateGuard ] },
  {
    path: 'customer', component: CustomerComponent, canActivateChild: [ ActivatechildGuard ],
    children: [
      { path: 'addCustomer', component: AddcustomerComponent },
    ]
  }
];