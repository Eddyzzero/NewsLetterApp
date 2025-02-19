import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntertainmentComponent } from './features/entertainment/entertainment.component';

const routes: Routes = [
  { path: 'entertainment', component: EntertainmentComponent},
  { path: '', redirectTo: 'app.component.html', pathMatch: 'full'}, // redirection pôr defaut
  { path: '**', redirectTo: 'app.component.html', pathMatch: 'full'}, // redirection pour les URLS innconnues
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
