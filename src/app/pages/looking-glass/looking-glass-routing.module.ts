import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LookingGlassComponent} from './looking-glass.component';

const routes: Routes = [{path: '', component: LookingGlassComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LookingGlassRoutingModule {
}
