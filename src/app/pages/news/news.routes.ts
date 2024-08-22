import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: "/blog", pathMatch: 'full' },
  { path: 'open-tech-meeting-2024-05', redirectTo: '/event/open-tech-meeting-2024-05', pathMatch: 'full' },
  {
    path: ':slug',
    loadComponent: () => import("./news-post/news-post.component").then(c => c.NewsPostComponent)
  },
];
