import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './views/partials/header/header.component';
import { SidebarComponent } from './views/partials/sidebar/sidebar.component';
import { FooterComponent } from './views/partials/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,HeaderComponent,FooterComponent,SidebarComponent]
})
export class AppComponent {
  title = 'employee-managment';
}
