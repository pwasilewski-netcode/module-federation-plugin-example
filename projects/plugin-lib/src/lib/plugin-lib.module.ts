import { NgModule } from '@angular/core';
import { PluginsContainerComponent } from './plugins-container.component';
import { PluginOutletDirective } from './plugin-outlet.directive';
import { RouterModule } from '@angular/router';
import { PluginWrapperComponent } from './plugin-wrapper.component';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from './empty.component';

@NgModule({
  declarations: [
    PluginsContainerComponent,
    PluginOutletDirective,
    PluginWrapperComponent,
    EmptyComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PluginsContainerComponent,
    PluginOutletDirective,
    PluginWrapperComponent,
    EmptyComponent
  ]
})
export class PluginsLibModule { }
