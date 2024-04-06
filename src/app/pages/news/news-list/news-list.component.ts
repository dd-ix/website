import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NewsService} from "../../../api/news.service";
import {BehaviorSubject, map, Observable, switchMap} from "rxjs";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {NewsCardComponent} from "../../../core/news-card/news-card.component";
import {CardComponent} from "../../../core/card/card.component";
import {MailingListComponent} from "../../../core/mailing-list/mailing-list.component";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NgForOf,
    NewsCardComponent,
    CardComponent,
    MailingListComponent
  ]
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
