import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'mfe1', pathMatch: 'full', outlet: 'mfe1' },
      {
        path: 'mfe1',
        outlet: 'mfe1',
        loadChildren: () => {
          return loadRemoteModule({
            remoteEntry: 'http://localhost:3000/remoteEntry.js',
            remoteName: 'mfe1',
            exposedModule: './Module'
          }).then(m => m['FlightsModule']);
        }
      },
      { path: '', redirectTo: 'mfe2', pathMatch: 'full', outlet: 'mfe2' },
      {
        path: 'mfe2',
        outlet: 'mfe2',
        loadChildren: () => {
          return loadRemoteModule({
            remoteEntry: 'http://localhost:4000/remoteEntry.js',
            remoteName: 'mfe2',
            exposedModule: './Module'
          }).then(m => m['FlightsModule']);
        }
      }
    ]
  },
  // ...plugins,
  {
    path: '**',
    component: NotFoundComponent
  }
  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];

