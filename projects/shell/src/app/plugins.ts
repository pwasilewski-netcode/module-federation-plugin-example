import { LoadRemoteModuleOptions } from "@angular-architects/module-federation";

export type PluginOptions = LoadRemoteModuleOptions & {
  ngModuleName?: string;
  elementName?: string;
  path?: string;
};

export const plugins: PluginOptions[] = [
  {
    remoteEntry: 'http://localhost:3000/remoteEntry.js',
    remoteName: 'mfe1',
    exposedModule: './Module',
    ngModuleName: 'FlightsModule',
    path: 'mfe1'
  },
  {
    remoteEntry: 'http://localhost:4000/remoteEntry.js',
    remoteName: 'mfe2',
    exposedModule: './Module',
    ngModuleName: 'FlightsModule',
    path: 'mfe2'
  },
  {
    remoteEntry: 'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
    remoteName: 'react',
    exposedModule: './web-components',
    elementName: 'react-element',
    path: 'react'
  },
  {
    remoteEntry: 'https://nice-grass-018f7d910.azurestaticapps.net/remoteEntry.js',
    remoteName: 'angular1',
    exposedModule: './web-components',
    elementName: 'angular1-element',
    path: 'angular1'
  },
  {
    remoteEntry: 'https://gray-pond-030798810.azurestaticapps.net//remoteEntry.js',
    remoteName: 'angular2',
    exposedModule: './web-components',
    elementName: 'angular2-element',
    path: 'angular2'
  }
];