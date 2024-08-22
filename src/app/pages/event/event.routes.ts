import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: ':slug',
    loadComponent: () => import("./event-post/event-post.component").then(c => c.EventPostComponent)
  },
];
