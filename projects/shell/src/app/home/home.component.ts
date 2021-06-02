import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ComponentFactoryResolver, ElementRef, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthLibService } from 'auth-lib';
import { PluginService } from 'shared-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('ngContainer', {read: ViewContainerRef, static: true})
  ngContainer: ViewContainerRef;

  @ViewChild('container', {read: ElementRef, static: true})
  container: ElementRef;

  userName: string = '';

  pluginOutlets: string[];

  constructor(private authService: AuthLibService, private pluginService: PluginService,
    private injector: Injector, private cfr: ComponentFactoryResolver) {
  }

  async ngOnInit() {
    // const pluginOptions = this.pluginService.getPlugins().filter(p => !!p.componentName)[0];
    // console.log(pluginOptions);
    // const ngModule = await loadRemoteModule({
    //   remoteEntry: 'http://localhost:4000/remoteEntry.js',
    //   exposedModule: './Module',
    //   remoteName: 'mfe2'
    // }).then(m => m['FlightsModule']);
    // const a = 'http://localhost:4000/remoteEntry.js';
    // import(a).then(m => {
      // console.log(m);
    // });
    // console.log(ngModule);
    // await loadRemoteModule({
    //     remoteEntry: 'http://localhost:4000/remoteEntry.js',
    //     exposedModule: './Module',
    //     remoteName: 'mfe2'
    // });
  
    // const Component = await loadRemoteModule(pluginOptions).then(m => m[pluginOptions.componentName]);
    // const factory = this.cfr.resolveComponentFactory(Component);
    // const component = this.ngContainer.createComponent(factory, null, this.injector);
    // console.log(component);
    // component
    // for (let p of this.pluginService.getPlugins().filter(p => !!p.outlet)) {
      
    // }
    for (let p of this.pluginService.getPlugins().filter(p => !p.ngModuleName)) {
      await this.pluginService.load(this.container.nativeElement, p);
    }
  }

  login() {
    this.authService.login(this.userName, null);
  }

}
