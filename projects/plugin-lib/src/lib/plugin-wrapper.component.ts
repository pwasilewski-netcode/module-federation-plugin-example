import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { PluginOptions } from 'shared-lib';

@Component({
  selector: 'lib-plugin-wrapper',
  template: ``
})
export class PluginWrapperComponent implements OnInit {

  @Input() plugin: PluginOptions;

  constructor(private elRef: ElementRef) { }

  async ngOnInit() {
    try {
      await loadRemoteModule(this.plugin);
      const element = document.createElement(this.plugin.elementName);
      this.elRef.nativeElement.appendChild(element);
    }
    catch (error) {
      console.error(error);
    }
  }

}
