import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)},
  {
    path: 'news',
    data: {title: $localize`News`},
    loadChildren: () => import('./pages/news/news.module').then(m => m.NewsModule)
  },
  {
    path: 'association',
    data: {title: $localize`Association`},
    loadChildren: () => import('./pages/association/association.module').then(c => c.AssociationModule)
  },
  {
    path: 'contact',
    data: {title: $localize`Contact`},
    loadComponent: () => import('./pages/contact/contact.component').then(c => c.ContactComponent)
  },
  {
    path: 'privacy-policy',
    data: {title: $localize`Privacy Policy`},
    loadComponent: () => import('./pages/privacy-policy/privacy-policy.component').then(c => c.PrivacyPolicyComponent)
  },
  {
    path: 'team',
    data: {title: $localize`Team`},
    loadComponent: () => import('./pages/team/team.component').then(c => c.TeamComponent)
  },
  {
    path: 'imprint',
    data: {title: $localize`Imprint`},
    loadComponent: () => import('./pages/imprint/imprint.component').then(c => c.ImprintComponent)
  },
  {
    path: 'peering',
    data: {title: $localize`Peering`},
    loadChildren: () => import('./pages/peering/peering.module').then(m => m.PeeringModule)
  },
  {
    path: 'stats',
    loadChildren: () => import('./pages/stats/stats.routes').then(c => c.routes)
  },
  {
    path: 'network',
    loadChildren: () => import("./pages/network/network.routes").then(r => r.routes),
  },
  {
    path: '**',
    data: {title: $localize`Not Found`},
    loadComponent: () => import('./pages/not-found/not-found.component').then(c => c.NotFoundComponent)
  },
];
