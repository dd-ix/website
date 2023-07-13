import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsListComponent} from "./news-list/news-list.component";
import {NewsPostComponent} from "./news-post/news-post.component";

const routes: Routes = [
  {path: '', component: NewsListComponent},
  {path: ':slug', component: NewsPostComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule {
}
