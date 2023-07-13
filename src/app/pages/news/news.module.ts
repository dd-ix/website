import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsRoutingModule} from './news-routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsPostComponent } from './news-post/news-post.component';

@NgModule({
  declarations: [
    NewsListComponent,
    NewsPostComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule {
}
