import { ChangeDetectorRef, ComponentFactoryResolver, Directive, Input, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';

@Directive({
  selector: 'lib-plugin-outlet',
  exportAs: 'outlet'
})
export class PluginOutletDirective implements OnInit, OnDestroy {

  public outlet: RouterOutlet;
  @Input() name: string;

  constructor(
    private parentContexts: ChildrenOutletContexts,
    private location: ViewContainerRef,
    private resolver: ComponentFactoryResolver, 
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.outlet = new RouterOutlet(this.parentContexts, this.location, this.resolver, this.name, this.changeDetector);
    this.outlet.ngOnInit();
  }

  ngOnDestroy() {
    if (!!this.outlet) {
      this.outlet.ngOnDestroy();
    }
  }

}
