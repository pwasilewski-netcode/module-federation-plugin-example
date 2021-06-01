import { NgModule } from '@angular/core';
import { SharedLibComponent } from './shared-lib.component';
import { OtherComponent } from './other/other.component';
import { AuthLibModule } from 'auth-lib';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SharedLibComponent, OtherComponent],
  imports: [
    AuthLibModule,
    HttpClientModule
  ],
  exports: [SharedLibComponent, OtherComponent]
})
export class SharedLibModule { }
