import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router,private authService: AuthService) {}

  login() {
    // Hardcoded login data
    const hardcodedUsername = 'admin';
    const hardcodedPassword = 'password';

    // Check if the entered credentials match the hardcoded ones
    if (this.username === hardcodedUsername && this.password === hardcodedPassword) {
      this.authService.login();

      this.router.navigate(['/list']);
      // Redirect to another page or perform any other action upon successful login
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }
}