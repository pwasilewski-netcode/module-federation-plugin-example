import { CommonModule } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PluginsLibModule } from "plugin-lib";

@Component({ template: `<p>Lazy home <a [routerLink]="['test']">go to test</a></p>` })
export class HomeComponent { }

@Component({ template: `<p>Lazy test <a [routerLink]="['./..']">go to home</a></p>` })
export class TestComponent { }

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test', component: TestComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    PluginsLibModule,
    RouterModule.forChild(routes)
  ]
})
export class PluginsModule { }