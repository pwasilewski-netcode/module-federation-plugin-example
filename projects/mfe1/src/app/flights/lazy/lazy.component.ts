import { Component, OnInit } from '@angular/core';
import { PluginService } from 'plugin-lib';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html'
})
export class LazyComponent implements OnInit {

  constructor(public pluginService: PluginService) { }

  ngOnInit() {
  }

}
