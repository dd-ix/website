import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NewsService} from "../../../api/news.service";
import {provideRouter} from "@angular/router";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsListComponent {

  protected readonly posts = this.newsService.getPosts();

  constructor(
    private readonly newsService: NewsService,
  ) {
  }

  protected readonly provideRouter = provideRouter;
}
