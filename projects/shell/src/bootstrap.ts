import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

// if (environment.production) {
//   enableProdMode();
// }

/*
  enableProdMode set window['ngDevMode'] to false that disables routing validation with error like:
  "a componentless route without children or loadChildren cannot have a named outlet set"
  in router.js line 2320
*/
enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
