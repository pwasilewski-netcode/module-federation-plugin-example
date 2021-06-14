import { Routes, UrlMatcher, UrlSegment } from '@angular/router';
import { HomeComponent } from './home/home.component';

export function endsWith(prefix: string): UrlMatcher {
  return (url: UrlSegment[]) => {
      const fullUrl = url.map(u => u.path).join('/');
      if (fullUrl.endsWith(prefix)) {
          return ({ consumed: url });
      }
      return null;
  };
}

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  // { matcher: endsWith('flights-search'), loadChildren: () => import('./flights/flights.module').then(m => m.FlightsModule) },
  { path: 'flights-search', loadChildren: () => import('./flights/flights.module').then(m => m.FlightsModule) },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
