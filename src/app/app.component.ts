import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './views/partials/header/header.component';
import { SidebarComponent } from './views/partials/sidebar/sidebar.component';
import { NgIf } from '@angular/common';
import { LoginComponent } from './component/login/login.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,HeaderComponent,SidebarComponent, NgIf, LoginComponent]
})
export class AppComponent {
  constructor(private router: Router) {}
  isLoginPage(): boolean {
    return this.router.url === '/login'; 
  }
}
