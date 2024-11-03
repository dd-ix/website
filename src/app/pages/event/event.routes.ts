import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'opening',
    loadComponent: () => import("./event-opening/event-opening.component").then(c => c.EventOpeningComponent)
  },
  {
    path: ':slug',
    loadComponent: () => import("./event-post/event-post.component").then(c => c.EventPostComponent)
  },
];
