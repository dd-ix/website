import { Routes } from '@angular/router';
import { routes as associationRoutes } from "./pages/association/association.routes";
import { routes as blogRoutes } from "./pages/blog/blog.routes";
import { routes as eventRoutes } from "./pages/event/event.routes";
import { routes as contactRoutes } from "./pages/contact/contact.routes";
import { routes as privacyPolicyRoutes } from "./pages/privacy-policy/privacy-policy.routes";
import { routes as teamRoutes } from "./pages/team/team.routes";
import { routes as imprintRoutes } from "./pages/imprint/imprint.routes";
import { routes as peeringRoutes } from "./pages/peering/peering.routes";
import { routes as statsRoutes } from "./pages/stats/stats.routes";
import { routes as networkRoutes } from "./pages/network/network.routes";
import {routes as newsRoutes} from "./pages/news/news.routes";
import {routes as communityRoutes} from "./pages/community/community.routes";

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent) },
  { path: 'blog', data: { title: $localize`Blog` }, children: blogRoutes },
  { path: 'event', data: { title: $localize`Event` }, children: eventRoutes },
  { path: 'news', data: { title: $localize`News` }, children: newsRoutes },
  { path: 'association', data: { title: $localize`Association` }, children: associationRoutes },
  { path: 'contact', data: { title: $localize`Contact` }, children: contactRoutes },
  { path: 'privacy-policy', data: { title: $localize`Privacy Policy` }, children: privacyPolicyRoutes },
  { path: 'team', data: { title: $localize`Team` }, children: teamRoutes },
  { path: 'imprint', data: { title: $localize`Imprint` }, children: imprintRoutes },
  { path: 'peering', data: { title: $localize`Peering` }, children: peeringRoutes },
  { path: 'stats', data: { title: $localize`Statistics` }, children: statsRoutes },
  { path: 'network', data: { title: $localize`Network` }, children: networkRoutes },
  { path: 'community', data: { title: $localize`Community` }, children: communityRoutes },
  {
    path: '**',
    data: { title: $localize`Not Found` },
    loadComponent: () => import('./pages/not-found/not-found.component').then(c => c.NotFoundComponent)
  },
];
