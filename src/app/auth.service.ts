import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor () { }
  
  isAdminRights(): boolean {
    return true;
  }

  isChildRights(): boolean {
    return true;
  }

}
