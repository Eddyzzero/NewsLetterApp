import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    RouterModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'newsLetterAngular';

  constructor( private router: Router) { }

  // Méthode pour vérifier si la route est active
  isActive(route: string): boolean {
    return this.router.url === '/' + route;
    }
}
