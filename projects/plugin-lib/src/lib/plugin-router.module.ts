import { InjectionToken, NgModule, NgModuleFactory } from "@angular/core";
import { ROUTES } from "@angular/router";
import { PluginModuleFactory } from "./plugin-module-factory";
import { PluginService } from "./plugin.service";
import { PluginScope } from "./plugin-model";

export const PLUGIN_ROUTES_SCOPE = new InjectionToken<PluginScope>("PLUGIN_ROUTES_SCOPE");

function resolveRoutes(pluginService: PluginService, scope: PluginScope) {
  return pluginService.getLazyRoutes(scope);
}

@NgModule({
  providers: [
    { provide: ROUTES, multi: true, useFactory: resolveRoutes, deps: [PluginService, PLUGIN_ROUTES_SCOPE] }
  ]
})
export class PluginRouterModule {
  static forPlugin(scope: PluginScope): NgModuleFactory<PluginRouterModule> {
    return new PluginModuleFactory<PluginRouterModule>({
      ngModule: PluginRouterModule,
      providers: [
        { provide: PLUGIN_ROUTES_SCOPE, useValue: scope }
      ]
    })
  }
}
