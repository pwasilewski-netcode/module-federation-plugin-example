import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadRemoteModuleOptions, loadRemoteModule } from '@angular-architects/module-federation';
import { PluginOptions } from '../plugins';

@Component({
  template: '<div #vc></div>',
})
export class PluginWrapper implements OnInit {

  @ViewChild('vc', {read: ElementRef, static: true})
  vc: ElementRef;

  constructor(private route: ActivatedRoute) { }

  async ngOnInit() {

    const options = this.route.snapshot.data as PluginOptions;
   
    try {
        await loadRemoteModule(options);

        const element = document.createElement(options.elementName);
        this.vc.nativeElement.appendChild(element);
    }
    catch(error) {
        console.error(error);
    }

  }

}