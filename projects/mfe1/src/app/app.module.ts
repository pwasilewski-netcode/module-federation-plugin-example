import { BrowserModule } from '@angular/platform-browser';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  providers: []
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector, router: Router) {
    router.initialNavigation();
  }

  ngDoBootstrap() {
    const elementConstructor = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('mfe1-element', elementConstructor);
  }
}
