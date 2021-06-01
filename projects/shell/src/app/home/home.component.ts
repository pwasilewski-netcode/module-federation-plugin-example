import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLibService } from 'auth-lib';
import { PluginService } from 'shared-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('container', {read: ElementRef, static: true})
  container: ElementRef;

  userName: string = '';

  constructor(private authService: AuthLibService, private pluginService: PluginService, private router: Router) { }

  async ngOnInit() {
    for (let p of this.pluginService.getPlugins().filter(p => !p.ngModuleName)) {
      await this.pluginService.load(this.container.nativeElement, p);
    }
  }

  login() {
    this.authService.login(this.userName, null);
  }

}
