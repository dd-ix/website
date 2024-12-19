import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import("./peering-landingpage/peering-landingpage.component").then(c => c.PeeringLandingpageComponent)
  },
  {
    path: 'policy',
    loadComponent: () => import("./peering-policy/peering-policy.component").then(c => c.PeeringPolicyComponent)
  },
];
