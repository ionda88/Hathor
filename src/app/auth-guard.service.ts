import { Injectable } from '@angular/core';
import {CanActivate, NavigationExtras, Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }
  private isAuthenticated: boolean = false;

  canActivate() {
    if(this.isAuthenticated) {return true}
    let sessionId = 123456789;

    // Set our navigation extras object
    // that contains our global query params and fragment
    let navigationExtras: NavigationExtras = {
      queryParams: { 'session_id': sessionId },
      fragment: 'anchor'
    };

    // Navigate to the login page with extras
    this.router.navigate(['/login'], navigationExtras);
    return false;
  }

  login() {
    this.isAuthenticated = true;
  }
}
