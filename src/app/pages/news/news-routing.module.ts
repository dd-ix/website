import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsListComponent} from "./news-list/news-list.component";
import {NewsPostComponent} from "./news-post/news-post.component";
import {NewsSubscribeComponent} from "./news-subscribe/news-subscribe.component";

const routes: Routes = [
  {path: '', component: NewsListComponent},
  {path: 'subscribe', component: NewsSubscribeComponent},
  {path: ':slug', component: NewsPostComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule {
}
