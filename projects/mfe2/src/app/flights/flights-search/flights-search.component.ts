import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthLibService } from 'auth-lib';


@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html'
})
export class FlightsSearchComponent {

  user = '';
 
  constructor(http: HttpClient, auth: AuthLibService) {
    console.debug('http', http);
    this.user = auth.user;
  }

}
