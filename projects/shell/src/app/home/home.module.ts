import { CommonModule } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { PluginRouterModule, PluginsLibModule } from "plugin-lib";

@Component({ template: `<p>Test1 <a [routerLink]="['./../test2']">go to test2</a></p>` })
export class Test1Component { }

@Component({ template: `<p>Test2 <a [routerLink]="['./../test1']">go to test1</a></p>` })
export class Test2Component { }

const routes: Routes = [
  { path: '', loadChildren: () => import('../lazy/lazy.module').then(m => m.PluginsModule) },
  { path: '', redirectTo: 'test1', outlet: 'home1' },
  { path: 'test1', component: Test1Component, outlet: 'home1' },
  { path: 'test2', component: Test2Component, outlet: 'home1' },
  { path: '', redirectTo: 'test2', outlet: 'home2' },
  { path: 'test1', component: Test1Component, outlet: 'home2' },
  { path: 'test2', component: Test2Component, outlet: 'home2' }
];

@NgModule({
  declarations: [
    Test1Component,
    Test2Component
  ],
  imports: [
    CommonModule,
    PluginsLibModule,
    PluginRouterModule.forChild('home', routes)
  ]
})
export class HomeModule { }
