import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import("./blog-list/blog-list.component").then(c => c.BlogListComponent),
  },
  {
    path: 'subscribe',
    loadComponent: () => import("./blog-subscribe/blog-subscribe.component").then(c => c.BlogSubscribeComponent)
  },
  {
    path: ':slug',
    loadComponent: () => import("./blog-post/blog-post.component").then(c => c.BlogPostComponent)
  },
];
