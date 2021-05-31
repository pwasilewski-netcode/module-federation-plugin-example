import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLibService } from 'auth-lib';
import { PluginService } from '../plugin.service';
import { plugins } from '../plugins';

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
    for (let p of plugins.filter(p => !p.ngModuleName)) {
      await this.pluginService.load(this.container.nativeElement, p);
    }
    console.log(this.router);
  }

  login() {
    this.authService.login(this.userName, null);
  }

}
