import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AssociationComponent} from "./association.component";
import {TechnicalComponent} from "./workinggroup/technical/technical.component";

const routes: Routes = [
  {path: '', component: AssociationComponent},
  {path: 'technical', loadChildren: () => import('./workinggroup/technical/technical.module').then(m => m.TechnicalModule) },
  {path: 'public_relations', loadComponent: () => import('./workinggroup/public-relations/public-relations.component').then(m => m.PublicRelationsComponent) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssociationRoutingModule {
}
