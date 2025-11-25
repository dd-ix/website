import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import("./landingpage/community-page.component").then(c => c.CommunityPageComponent)
  },
  {
    path: 'mirror',
    loadComponent: () => import("./mirror/mirror.component").then(c => c.MirrorComponent)
  }
];
