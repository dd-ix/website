import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NewsService} from "../../../api/news.service";

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
}
