import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { EntertainmentComponent } from './app/features/entertainment/entertainment.component';
import { GeneralComponent } from './app/features/general/general.component';
import { HealthComponent } from './app/features/health/health.component';
import { ScienceComponent } from './app/features/science/science.component';
import { SportsComponent } from './app/features/sports/sports.component';
import { TechnologyComponent } from './app/features/technology/technology.component';

const routes: Routes = [
  { path: 'entertainment', component: EntertainmentComponent},
  { path: 'general', component: GeneralComponent},
  { path: 'health', component: HealthComponent},
  { path: 'science', component: ScienceComponent},
  { path: 'sports', component: SportsComponent},
  { path: 'technology', component: TechnologyComponent},
  { path: '', redirectTo: 'app.component.html', pathMatch: 'full'}, // redirection pôr defaut
  { path: '**', redirectTo: 'app.component.html', pathMatch: 'full'}, // redirection pour les URLS innconnues
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch((err) => console.error(err));
