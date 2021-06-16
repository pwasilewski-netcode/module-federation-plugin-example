import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode, getPlatform } from '@angular/core';
import { bootstrap } from '@angular-architects/module-federation-tools';

bootstrap(AppModule, {
  production: environment.production
}).then(() => console.log('mfe1 loaded'))
  .catch(err => console.error(err));

// let platform = getPlatform();
// if (!platform) {
//   platform = platformBrowserDynamic();
//   if (environment.production) {
//     enableProdMode();
//   }
// }

// platform.bootstrapModule(AppModule)
//   .then(() => console.log('mfe1 loaded'))
//   .catch(err => console.error(err));
