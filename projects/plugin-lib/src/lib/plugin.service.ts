import { loadRemoteModule, LoadRemoteModuleOptions } from '@angular-architects/module-federation';
import { startsWith, WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { Injectable } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';

export type PluginScope = 'menu' | 'home';

export type PluginOptions = LoadRemoteModuleOptions & {
  ngModuleName?: string;
  elementName?: string;
  link: string;
  scopes: PluginScope[];
};

@Injectable({
  providedIn: 'root'
})
export class PluginService {

  private plugins: PluginOptions[] = [];

  constructor(private router: Router) {
    console.log('PluginService');
  }

  init(plugins: PluginOptions[]) {
    this.plugins = plugins;
  }

  forScope(scope: PluginScope) {
    return [...this.plugins.filter(p => p.scopes.includes(scope))];
  }

  registerRoutes() {
    const routes = this.toRoutes(this.forScope('menu'));
    this.router.config.splice(this.router.config.length - 1, 0, ...routes);
    this.router.resetConfig(this.router.config);
  }

  getLazyRoutes(scope: PluginScope): Routes {
    const routes: Routes = [];
    for (const plugin of this.forScope(scope).filter(p => !!p.ngModuleName)) {
      routes.push(
        { path: '', redirectTo: plugin.remoteName, pathMatch: 'full', outlet: plugin.remoteName },
        {
          path: plugin.remoteName,
          outlet: plugin.remoteName,
          loadChildren: () => {
            return loadRemoteModule({
              remoteEntry: plugin.remoteEntry,
              remoteName: plugin.remoteName,
              exposedModule: plugin.exposedModule
            }).then(m => m[plugin.ngModuleName]);
          }
        }
      );
    }
    return routes;
  }

  getRouteUrl(pluginName: string, extraParams?: string): string {
    const plugin = this.plugins.find(p => p.scopes.includes('menu') && p.remoteName.toLocaleLowerCase() === pluginName.toLocaleLowerCase());
    return `/${plugin.link}${extraParams ?? ''}`;
  }

  private toRoutes(plugins: PluginOptions[]): Routes {
    return plugins.map(p => !!p.ngModuleName ? this.createModuleRoute(p) : this.createComponentRoute(p));
  }

  private createModuleRoute(plugin: PluginOptions): Route {
    return {
      path: plugin.remoteName,
      loadChildren: () => {
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
      matcher: startsWith(plugin.remoteName),
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
