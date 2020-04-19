import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { MerchantComponent } from './merchant/merchant.component';

@Injectable()
export class DeactivateGuard implements CanDeactivate<MerchantComponent> {

  canDeactivate(): boolean {
    return window.confirm( 'Are you sure to navigate ?' );
  }

}
