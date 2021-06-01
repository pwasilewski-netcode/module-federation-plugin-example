import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthLibModule } from 'auth-lib';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PluginWrapper } from './utils/plugin-wrapper';
import { PluginService } from 'shared-lib';

@NgModule({
  imports: [
    BrowserModule,
    AuthLibModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    PluginWrapper,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule implements DoBootstrap {
  constructor(private pluginService: PluginService, private router: Router) { }

  async ngDoBootstrap(appRef: ApplicationRef) {
    await this.pluginService.initRoutes(this.router);
    appRef.bootstrap(AppComponent);
  }
}
