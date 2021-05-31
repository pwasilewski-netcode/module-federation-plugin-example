import { loadRemoteModule } from '@angular-architects/module-federation';
import { Injectable } from '@angular/core';
import { PluginOptions, plugins } from './plugins';

@Injectable({
  providedIn: 'root'
})
export class PluginService {

  constructor() {
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

  getRoutes(): {path: string, name: string}[] {
    return plugins.filter(p => !!p.path).map(p => {
      return {
        path: `/${p.path}`,
        name: p.remoteName
      }
    });
  }

  getRoute(pluginName: string, extraParams?: string): string {
    const plugin = plugins.find(p => !!p.path && p.remoteName.toLocaleLowerCase() === pluginName.toLocaleLowerCase());
    return `/${plugin.path}${extraParams ?? ''}`;
  }
}
