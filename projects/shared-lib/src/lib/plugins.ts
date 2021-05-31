import { LoadRemoteModuleOptions } from "@angular-architects/module-federation";

export type PluginOptions = LoadRemoteModuleOptions & {
  ngModuleName?: string;
  elementName?: string;
  path?: string;
};

const request = new XMLHttpRequest();
request.open('GET', 'http://localhost:5000/assets/plugins.json', false);  // `false` makes the request synchronous
request.send(null);
export const plugins: PluginOptions[] = JSON.parse(request.responseText);
