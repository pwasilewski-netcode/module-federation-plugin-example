import { Component, OnInit } from '@angular/core';
import { AuthLibService } from 'auth-lib';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PluginService } from 'plugin-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'shell';

  constructor(private service: AuthLibService, http: HttpClient, public pluginService: PluginService, private router: Router) {
    this.service.login('Max', null);
    console.debug('http', http);
    // this.pluginService.initRoutes(this.router);
  }

  ngOnInit() {
    this.pluginService.registerRoutes();
  }
}
