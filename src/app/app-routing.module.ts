import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)},
  {path: 'news', loadChildren: () => import('./pages/news/news.module').then(m => m.NewsModule)},
  {
    path: 'association',
    loadComponent: () => import('./pages/association/association.component').then(c => c.AssociationComponent)
  },
  {
    path: 'looking-glass',
    loadChildren: () => import('./pages/looking-glass/looking-glass.module').then(m => m.LookingGlassModule)
  },
  {path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(c => c.ContactComponent)},
  {
    path: 'privacy-policy',
    loadComponent: () => import('./pages/privacy-policy/privacy-policy.component').then(c => c.PrivacyPolicyComponent)
  },
  {path: 'imprint', loadComponent: () => import('./pages/imprint/imprint.component').then(c => c.ImprintComponent)},
  { path: 'peering', loadChildren: () => import('./pages/peering/peering.module').then(m => m.PeeringModule) },
  {path: '**', loadComponent: () => import('./pages/not-found/not-found.component').then(c => c.NotFoundComponent)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
