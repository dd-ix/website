import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AssociationComponent} from "./association.component";

const routes: Routes = [
  {path: '', component: AssociationComponent},
  {
    path: 'tech',
    data: {title: $localize`Technical Workinggroup`},
    loadChildren: () => import('./workinggroup/technical/technical.module').then(m => m.TechnicalModule)
  },
  {
    path: 'public-relations',
    data: {title: $localize`Public Relations Workinggroup`},
    loadComponent: () => import('./workinggroup/public-relations/public-relations.component').then(m => m.PublicRelationsComponent)
  },
  {
    path: 'clients-and-sponsors',
    data: {title: $localize`Clients and Sponsors Workinggroup`},
    loadComponent: () => import('./workinggroup/clients-and-sponsors/clients-and-sponsors.component').then(m => m.ClientsAndSponsorsComponent),
  },
  {
    path: 'finance-and-legal',
    data: {title: $localize`Finance and Legal Workinggroup`},
    loadComponent: () => import('./workinggroup/finance-and-legal/finance-and-legal.component').then(m => m.FinanceAndLegalComponent),
  },
  {
    path: 'events',
    data: {title: $localize`Events`},
    loadComponent: () => import('./workinggroup/events/events.component').then(m => m.EventsComponent),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssociationRoutingModule {
}
