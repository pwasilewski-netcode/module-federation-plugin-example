import { loadRemoteModule } from '@angular-architects/module-federation';
import { Injectable } from '@angular/core';
import { PluginOptions } from './plugins';

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
}
