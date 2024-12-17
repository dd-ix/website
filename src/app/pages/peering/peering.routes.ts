import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import("./peering-landingpage/peering-landingpage.component").then(c => c.PeeringLandingpageComponent)
  },
  {
    path: 'explained',
    loadComponent: () => import("./peering-explained/peering-explained.component").then(c => c.PeeringExplainedComponent)
  },
  {
    path: 'policy',
    loadComponent: () => import("./peering-policy/peering-policy.component").then(c => c.PeeringPolicyComponent)
  },
];
