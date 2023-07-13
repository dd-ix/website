import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LookingGlassRoutingModule} from './looking-glass-routing.module';
import {LookingGlassComponent} from './looking-glass.component';

@NgModule({
  declarations: [
    LookingGlassComponent
  ],
  imports: [
    CommonModule,
    LookingGlassRoutingModule
  ]
})
export class LookingGlassModule {
}
