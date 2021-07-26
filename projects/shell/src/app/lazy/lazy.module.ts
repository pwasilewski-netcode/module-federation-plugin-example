import { CommonModule } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { PluginRouterModule, PluginsLibModule } from "plugin-lib";

@Component({ template: `<p>Lazy home</p><p><a [routerLink]="['lazy1']">go to lazy1</a></p><p><a [routerLink]="['lazy2']">go to lazy2</a></p>` })
export class HomeComponent { }

@Component({ template: `<p>Lazy one</p><p><a [routerLink]="['..']">go to home</a></p><p><a [routerLink]="['../lazy2']">go to lazy2</a></p>` })
export class Lazy1Component { }

@Component({ template: `<p>Lazy two</p><p><a [routerLink]="['..']">go to home</a></p><p><a [routerLink]="['../lazy1']">go to lazy1</a></p>` })
export class Lazy2Component { }

@Component({ template: `<p>Test1 <a [routerLink]="['../test2']">go to test2</a></p>
<p><a [routerLink]="['/home', { outlets: { home2: ['test1'] } }]">test1 in home2</a></p>
<p><a [routerLink]="['/home', { outlets: { home2: ['test2'] } }]">test2 in home2</a></p>
<p><a [routerLink]="['/home', { outlets: { mfe1: ['mfe1', 'more'] } }]">show more in mfe1</a></p>
<p><a [routerLink]="['/home', { outlets: { mfe1: ['mfe1'] } }]">show less in mfe1</a></p>
<p><a [routerLink]="['/home', { outlets: { mfe2: ['mfe2', 'more'] } }]">show more in mfe2</a></p>
<p><a [routerLink]="['/home', { outlets: { mfe2: ['mfe2'] } }]">show less in mfe2</a></p>
` })
export class Test1Component { }

@Component({ template: `<p>Test2 <a [routerLink]="['../test1']">go to test1</a></p>
<p><a [routerLink]="['/home', '']">home in main outlet</a></p>
<p><a [routerLink]="['/home', 'lazy1']">lazy1 in main outlet</a></p>
<p><a [routerLink]="['/home', 'lazy2']">lazy2 in main outlet</a></p>` })
export class Test2Component { }


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lazy1', component: Lazy1Component },
  { path: 'lazy2', component: Lazy2Component },
  { path: '', redirectTo: 'test1', outlet: 'home1' },
  { path: 'test1', component: Test1Component, outlet: 'home1' },
  { path: 'test2', component: Test2Component, outlet: 'home1' },
  { path: '', redirectTo: 'test2', outlet: 'home2' },
  { path: 'test1', component: Test1Component, outlet: 'home2' },
  { path: 'test2', component: Test2Component, outlet: 'home2' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    HomeComponent,
    Lazy1Component,
    Lazy2Component,
    Test1Component,
    Test2Component
  ],
  imports: [
    CommonModule,
    PluginsLibModule,
    PluginRouterModule.forChild('home', routes)
  ]
})
export class LazyModule { }