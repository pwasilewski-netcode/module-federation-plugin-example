import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PluginsLibModule } from "plugin-lib";
import { HomeComponent } from "./home.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () => import('../lazy/lazy.module').then(m => m.LazyModule),
  }
];

@NgModule({
  imports: [
    CommonModule,
    PluginsLibModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
