import { loadRemoteModule, LoadRemoteModuleOptions } from '@angular-architects/module-federation';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { Injectable } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';

export type PluginScope = 'menu' | 'home';

export type PluginOptions = LoadRemoteModuleOptions & {
  ngModuleName?: string;
  elementName?: string;
  scopes: PluginScope[];
  // path?: string;
  // outlet?: string;
};

@Injectable({
  providedIn: 'root'
})
export class PluginService {

  private plugins: PluginOptions[] = [];

  constructor(private router: Router) { }

  init(plugins: PluginOptions[]) {
    this.plugins = plugins;
  }

  forScope(scope: PluginScope) {
    return [...this.plugins.filter(p => p.scopes.includes(scope))];
  }

  registerRoutes() {
    console.log('REGISTER', this.router);
    const routes = this.toRoutes(this.forScope('menu'));
    this.router.config.splice(this.router.config.length - 1, 0, ...routes);
    this.router.resetConfig(this.router.config);
    // console.log(router.config);
  }

  // getRoutesPaths(): {path: string, name: string}[] {
  //   return this.plugins.filter(p => !!p.path).map(p => {
  //     return {
  //       path: `/${p.path}`,
  //       name: p.remoteName
  //     }
  //   });
  // }

  getRouteUrl(pluginName: string, extraParams?: string): string {
    const plugin = this.plugins.find(p => p.scopes.includes('menu') && p.remoteName.toLocaleLowerCase() === pluginName.toLocaleLowerCase());
    return `/${plugin.remoteName}${extraParams ?? ''}`;
  }

  private toRoutes(plugins: PluginOptions[]): Routes {
    return plugins.map(p => !!p.ngModuleName ? this.createModuleRoute(p) : this.createComponentRoute(p));
  }

  private createModuleRoute(plugin: PluginOptions): Route {
    return {
      path: plugin.remoteName,
      loadChildren: () => {
        // console.log('ROUTE', plugin.remoteName);
        return loadRemoteModule({
          remoteEntry: plugin.remoteEntry,
          remoteName: plugin.remoteName,
          exposedModule: plugin.exposedModule
        }).then(m => m[plugin.ngModuleName]);
      }
    };
  }

  private createComponentRoute(plugin: PluginOptions): Route {
    return {
      path: plugin.remoteName,
      component: WebComponentWrapper,
      data: <WebComponentWrapperOptions> {
        remoteEntry: plugin.remoteEntry,
        remoteName: plugin.remoteName,
        exposedModule: plugin.exposedModule,
        elementName: plugin.elementName
      }
    };
  }
}
