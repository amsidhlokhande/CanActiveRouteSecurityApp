import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Route } from '@angular/compiler/src/core';

@Injectable( {
  providedIn: 'root'
} )
export class ActivatechildGuard implements CanActivateChild {
  constructor ( private authService: AuthService, private router: Router ) { }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if ( this.authService.isChildRights ) {
      return true;
    } else {
      alert( 'You dont have permission to view this page so redirecting to home' );
      this.router.navigate( [ 'Home' ] );
      return false;
    }

  }
}
