import { CommonModule } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PluginsLibModule } from "plugin-lib";

@Component({ template: `<p>Lazy home</p><p><a [routerLink]="['test1']">go to test1</a></p><p><a [routerLink]="['test2']">go to test2</a></p>` })
export class HomeComponent { }

@Component({ template: `<p>Lazy test1</p><p><a [routerLink]="['..']">go to home</a></p><p><a [routerLink]="['../test2']">go to test2</a></p>` })
export class Test1Component { }

@Component({ template: `<p>Lazy test2</p><p><a [routerLink]="['..']">go to home</a></p><p><a [routerLink]="['../test1']">go to test1</a></p>` })
export class Test2Component { }

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test1', component: Test1Component },
  { path: 'test2', component: Test2Component },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    HomeComponent,
    Test1Component,
    Test2Component
  ],
  imports: [
    CommonModule,
    PluginsLibModule,
    RouterModule.forChild(routes)
  ]
})
export class LazyModule { }