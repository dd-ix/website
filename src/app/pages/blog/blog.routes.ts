import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import("./blog-list/blog-list.component").then(c => c.BlogListComponent),
  },
   {
    path: ':slug',
    loadComponent: () => import("./blog-post/blog-post.component").then(c => c.BlogPostComponent)
  },
];
