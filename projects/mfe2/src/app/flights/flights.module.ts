import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsSearchComponent } from './flights-search/flights-search.component';
import { RouterModule } from '@angular/router';
import { FLIGHTS_ROUTES } from './flights.routes';
import { AuthLibModule } from 'auth-lib';
import { SharedLibModule } from 'shared-lib';
import { LazyComponent } from './lazy/lazy.component';
import { PluginsLibModule } from 'plugin-lib';

@NgModule({
  imports: [
    CommonModule,
    AuthLibModule,
    SharedLibModule,
    PluginsLibModule,
    RouterModule.forChild(FLIGHTS_ROUTES)
  ],
  declarations: [
    FlightsSearchComponent,
    LazyComponent
  ]
})
export class FlightsModule { }
