import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import("./landingpage/community-page.component").then(c => c.CommunityPageComponent)
  },
];
