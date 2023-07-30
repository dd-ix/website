import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {NewsRoutingModule} from './news-routing.module';
import {NewsListComponent} from './news-list/news-list.component';
import {NewsPostComponent} from './news-post/news-post.component';
import {NewsCardComponent} from "../../core/news-card/news-card.component";

@NgModule({
  declarations: [
    NewsListComponent,
    NewsPostComponent
  ],
  exports: [
    NewsPostComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    NgOptimizedImage,
    NewsCardComponent,
  ]
})
export class NewsModule {
}
