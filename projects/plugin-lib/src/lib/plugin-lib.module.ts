import { NgModule } from '@angular/core';
import { PluginsContainerComponent } from './plugins-container.component';
import { PluginOutletDirective } from './plugin-outlet.directive';
import { RouterModule } from '@angular/router';
import { PluginWrapperComponent } from './plugin-wrapper.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PluginsContainerComponent,
    PluginOutletDirective,
    PluginWrapperComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PluginsContainerComponent,
    PluginOutletDirective,
    PluginWrapperComponent
  ]
})
export class PluginsLibModule { }
