import { Route, Routes, UrlMatcher, UrlSegment } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { plugins } from 'shared-lib';

export function startsWith(prefix: string): UrlMatcher {
  return (url: UrlSegment[]) => {
      const fullUrl = url.map(u => u.path).join('/');
      if (fullUrl.startsWith(prefix)) {
          return ({ consumed: url});
      }
      return null;
  };
}

const pluginsRoutes = plugins.map(p => {
  if (!!p.ngModuleName) {
    return <Route> {
      // matcher: startsWith(p.path),
      path: p.path,
      loadChildren: () => {
        return loadRemoteModule({
          remoteEntry: p.remoteEntry,
          remoteName: p.remoteName,
          exposedModule: p.exposedModule
        }).then(m => m[p.ngModuleName]);
      }
    };
  }
  return <Route> {
    // matcher: startsWith(p.path),
    path: p.path,
    component: WebComponentWrapper,
    data: <WebComponentWrapperOptions> {
      remoteEntry: p.remoteEntry,
      remoteName: p.remoteName,
      exposedModule: p.exposedModule,
      elementName: p.elementName
    }
  };
});

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  ...pluginsRoutes,
  {
    path: '**',
    component: NotFoundComponent
  }
  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];

