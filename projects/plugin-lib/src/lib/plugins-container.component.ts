import { Component, Input, OnInit } from '@angular/core';
import { PluginOptions, PluginScope } from './plugin-model';
import { PluginService } from './plugin.service';

@Component({
  selector: 'lib-plugins-container',
  template: `<ng-container *ngFor="let plugin of plugins">
  <lib-plugin-wrapper *ngIf="!!plugin.elementName" [plugin]="plugin"></lib-plugin-wrapper>
  <lib-plugin-outlet *ngIf="!!plugin.ngModuleName" [name]="plugin.remoteName"></lib-plugin-outlet>
</ng-container>`
})
export class PluginsContainerComponent implements OnInit {

  @Input() scope: PluginScope;

  plugins: PluginOptions[] = [];

  constructor(private pluginService: PluginService) { }

  ngOnInit() {
    this.plugins = this.pluginService.forScope(this.scope);
  }

}
