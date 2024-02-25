import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '', loadComponent: () => import('./stats.component').then(c => c.StatsComponent),
    data: {title: $localize`Statistics`},
  },
  {
    path: 'as112', loadComponent:  () => import('./as112/as112.component').then(c => c.As112Component),
    data: {title: $localize`AS112 Statistics`},
  },
];
