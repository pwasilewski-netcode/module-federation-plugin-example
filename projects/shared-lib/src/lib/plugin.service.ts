import { loadRemoteModule, LoadRemoteModuleOptions } from '@angular-architects/module-federation';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';

export type PluginOptions = LoadRemoteModuleOptions & {
  ngModuleName?: string;
  elementName?: string;
  path?: string;
};

@Injectable({
  providedIn: 'root'
})
export class PluginService {

  private plugins: PluginOptions[] = [];

  constructor(private http: HttpClient) { }

  async initRoutes(router: Router) {
    this.plugins = await this.http.get<PluginOptions[]>('http://localhost:5000/assets/plugins.json').toPromise();
    router.config.splice(router.config.length - 1, 0, ...this.toRoutes(this.plugins));
    router.resetConfig(router.config);
  }

  async load(container: HTMLElement, options: PluginOptions) {
    try {
        await loadRemoteModule(options);
        const element = document.createElement(options.elementName);
        container.appendChild(element);
    }
    catch(error) {
        console.error(error);
    }
  }

  getPlugins(): PluginOptions[] {
    return [...this.plugins];
  }

  getRoutes(): {path: string, name: string}[] {
    return this.plugins.filter(p => !!p.path).map(p => {
      return {
        path: `/${p.path}`,
        name: p.remoteName
      }
    });
  }

  getRoute(pluginName: string, extraParams?: string): string {
    const plugin = this.plugins.find(p => !!p.path && p.remoteName.toLocaleLowerCase() === pluginName.toLocaleLowerCase());
    return `/${plugin.path}${extraParams ?? ''}`;
  }

  toRoutes(plugins: PluginOptions[]): Routes {
    return plugins.map(p => {
      if (!!p.ngModuleName) {
        return <Route> {
          // matcher: startsWith(p.path),
          path: p.path,
          loadChildren: () => {
            return loadRemoteModule({
              remoteEntry: p.remoteEntry,
              remoteName: p.remoteName,
              exposedModule: p.exposedModule
            }).then(m => m[p.ngModuleName]);
          }
        };
      }
      return <Route> {
        // matcher: startsWith(p.path),
        path: p.path,
        component: WebComponentWrapper,
        data: <WebComponentWrapperOptions> {
          remoteEntry: p.remoteEntry,
          remoteName: p.remoteName,
          exposedModule: p.exposedModule,
          elementName: p.elementName
        }
      };
    });
  }
}
