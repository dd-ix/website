import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', loadComponent: () => import("./team.component").then(c => c.TeamComponent)},
];
