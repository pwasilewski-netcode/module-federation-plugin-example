import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  
  constructor(http: HttpClient) {
    // console.log('FLIGHTS AppComponent');
    // console.debug('http', http);
  }
}
