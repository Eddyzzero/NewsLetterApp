import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NewsFeedComponent } from "./news-feed/news-feed.component";
@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    NewsFeedComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'newsLetterAngular';
}
