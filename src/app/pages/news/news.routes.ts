import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import("./news-list/news-list.component").then(c => c.NewsListComponent),
  },
  {
    path: 'subscribe',
    loadComponent: () => import("./news-subscribe/news-subscribe.component").then(c => c.NewsSubscribeComponent)
  },
  {
    path: ':slug',
    loadComponent: () => import("./news-post/news-post.component").then(c => c.NewsPostComponent)
  },
];
