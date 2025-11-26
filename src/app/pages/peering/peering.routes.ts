import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import("./peering.component").then(c => c.PeeringComponent)
  },
  {
    path: 'policy',
    loadComponent: () => import("./peering-policy/peering-policy.component").then(c => c.PeeringPolicyComponent)
  },
];
