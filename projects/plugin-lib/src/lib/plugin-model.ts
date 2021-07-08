import { LoadRemoteModuleOptions } from '@angular-architects/module-federation';

export type PluginScope = 'menu' | 'home';

export type PluginOptions = LoadRemoteModuleOptions & {
  ngModuleName?: string;
  elementName?: string;
  link: string;
  scopes: PluginScope[];
};
