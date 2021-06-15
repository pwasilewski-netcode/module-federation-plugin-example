import { Routes } from '@angular/router';
import { PluginRouterModule } from 'plugin-lib';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () => PluginRouterModule.forPlugin('home')
  },
  // ...plugins,
  {
    path: '**',
    component: NotFoundComponent
  }
  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];

