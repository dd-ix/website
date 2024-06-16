import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import("./event-list/event-list.component").then(c => c.EventListComponent),
  },
  {
    path: 'subscribe',
    loadComponent: () => import("../blog/blog-subscribe/blog-subscribe.component").then(c => c.BlogSubscribeComponent)
  },
  {
    path: ':slug',
    loadComponent: () => import("./event-post/event-post.component").then(c => c.EventPostComponent)
  },
];
