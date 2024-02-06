import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { MatButton } from '@angular/material/button';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, FormsModule, MatButton],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private router: Router,private authService: AuthService,private _snackBar: MatSnackBar) {}

  login() {
    // Validasi kredensial pengguna
    const isValid = this.authService.validateUser(this.username, this.password);
    
    if (isValid) {
      this.authService.login();
      this.router.navigate(['/list']);
    } else {
      this.showSnackBar('Invalid username or password. Please try again.', 'warn');
    }
  }

  showSnackBar(message: string, panelClass: string) {
    this._snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: [panelClass],
    });
  }
}
