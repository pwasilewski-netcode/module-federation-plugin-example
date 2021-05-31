import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'flights-search', loadChildren: () => import('./flights/flights.module').then(m => m.FlightsModule) },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
