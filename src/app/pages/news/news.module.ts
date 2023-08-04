import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsRoutingModule} from './news-routing.module';
import {NewsListComponent} from './news-list/news-list.component';
import {NewsPostComponent} from './news-post/news-post.component';
import {NewsCardComponent} from "../../core/news-card/news-card.component";
import {CardComponent} from "../../core/card/card.component";

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
        NewsCardComponent,
        CardComponent,
    ]
})
export class NewsModule {
}
