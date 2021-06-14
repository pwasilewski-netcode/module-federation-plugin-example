import { HttpClientModule } from '@angular/common/http';
import { ApplicationRef, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterEvent, RouterModule } from '@angular/router';
import { AuthLibModule } from 'auth-lib';
import { PluginService, PluginsLibModule } from 'plugin-lib';
import { AppInitService } from './app-init.service';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    AuthLibModule,
    PluginsLibModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (appInitService: AppInitService) => {
        return () => appInitService.init();
      },
      deps: [AppInitService, PluginService],
      multi: true
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule implements DoBootstrap {
  constructor(private pluginService: PluginService, private router: Router) {
    router.events.subscribe((e: RouterEvent) => {
      // console.log('🥸', e);
    })
  }

  ngDoBootstrap(appRef: ApplicationRef) {
    // await this.pluginService.initRoutes(this.router);
    // this.pluginService.registerRoutes();
    appRef.bootstrap(AppComponent);
  }
}

