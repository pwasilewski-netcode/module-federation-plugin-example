import { InjectionToken, NgModule, NgModuleFactory } from "@angular/core";
import { RouterModule, Routes, ROUTES } from "@angular/router";
import { PluginModuleFactory } from "./plugin-module-factory";
import { PluginService } from "./plugin.service";
import { PluginScope } from "./plugin-model";

export const PLUGIN_ROUTES_SCOPE = new InjectionToken<PluginScope>("PLUGIN_ROUTES_SCOPE");
export const PLUGIN_ROUTES_CHILDREN = new InjectionToken<Routes>("PLUGIN_ROUTES_CHILDREN");

function resolveRoutes(pluginService: PluginService, scope: PluginScope, children?: Routes) {
  return [...(children ?? []), ...pluginService.getLazyRoutes(scope)];
}

@NgModule({
  providers: [
    { provide: ROUTES, multi: true, useFactory: resolveRoutes, deps: [PluginService, PLUGIN_ROUTES_SCOPE, PLUGIN_ROUTES_CHILDREN] }
  ],
  exports: [RouterModule]
})
export class PluginRouterModule {
  static loadChildren(scope: PluginScope, children?: Routes): NgModuleFactory<PluginRouterModule> {
    return new PluginModuleFactory<PluginRouterModule>(this.forChild(scope, children));
  }

  static forChild(scope: PluginScope, children?: Routes) {
    return {
      ngModule: PluginRouterModule,
      providers: [
        { provide: PLUGIN_ROUTES_SCOPE, useValue: scope },
        { provide: PLUGIN_ROUTES_CHILDREN, useValue: children }
      ]
    };
  }
}
