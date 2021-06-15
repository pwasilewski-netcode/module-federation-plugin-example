import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthLibService } from 'auth-lib';
import { PluginService } from 'plugin-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'shell';

  constructor(private service: AuthLibService, http: HttpClient, public pluginService: PluginService) {
    this.service.login('Max', null);
    console.debug('http', http);
  }

  ngOnInit() {
    this.pluginService.registerRoutes();
  }
}
