import { Injectable } from '@angular/core';
import { dataUser } from './shared/models/login.users';

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

  validateUser(username: string, password: string): boolean {
    const user = dataUser.find(u => u.username === username && u.password === password);
    return !!user;
  }

  logout(): void {
    localStorage.removeItem('currentUser'); 
  }
}
