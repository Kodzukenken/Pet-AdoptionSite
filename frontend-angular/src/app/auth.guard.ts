import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = !!localStorage.getItem('authToken'); // check for token
    if (!isLoggedIn) {
      this.router.navigate(['/auth']); 
      return false;
    }
    return true;
  }
}
