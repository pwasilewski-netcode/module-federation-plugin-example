import { Component, ComponentFactoryResolver, Inject, Injector, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  template: `<ng-container #vc></ng-container>`,
})
export class PluginHostComponent implements OnInit {

  @ViewChild('vc', {read: ViewContainerRef, static: true})
  vc: ViewContainerRef;

  @Input() component?: string;

  constructor(private injector: Injector, private cfr: ComponentFactoryResolver) { }

  async ngOnInit() {
    // const comp = await import('../lazy/lazy.component').then(m => m.LazyComponent);

    // const factory = this.cfr.resolveComponentFactory(comp);
    // this.vc.createComponent(factory, null, this.injector);
  }

}