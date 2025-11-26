import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import("./community.component").then(c => c.CommunityComponent)
  },
  {
    path: 'mirror',
    loadComponent: () => import("./mirror/mirror.component").then(c => c.MirrorComponent)
  }
];
