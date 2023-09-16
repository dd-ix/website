import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NewsService} from "../../../api/news.service";
import {BehaviorSubject, map, Observable, switchMap} from "rxjs";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsListComponent {

  protected readonly selectedKeywords = new BehaviorSubject<string[]>([]);
  protected readonly posts = this.selectedKeywords.pipe(switchMap(keywords => this.newsService.getPosts(keywords)));
  protected readonly keywords = this.newsService.getKeywords();

  constructor(
    private readonly newsService: NewsService,
  ) {
  }

  protected isSelected(keyword: string): Observable<boolean> {
    return this.selectedKeywords.pipe(map(keywords => keywords.includes(keyword)));
  }

  protected toggleKeyword(keyword: string) {
    if (!this.selectedKeywords.value.includes(keyword)) {
      this.selectedKeywords.next([...this.selectedKeywords.value, keyword])
    } else {
      this.selectedKeywords.next(this.selectedKeywords.value.filter(existing => existing !== keyword));
    }
  }
}
