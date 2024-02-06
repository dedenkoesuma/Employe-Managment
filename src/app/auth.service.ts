import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser'); 
  }

  login(): void {
    localStorage.setItem('currentUser', 'true'); 
  }

  logout(): void {
    localStorage.removeItem('currentUser'); 
  }
}
