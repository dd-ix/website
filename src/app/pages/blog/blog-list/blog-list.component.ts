import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PostService } from "../../../api/post.service";
import { BehaviorSubject, combineLatest, map, Observable, switchMap } from "rxjs";
import { AsyncPipe } from "@angular/common";
import { BlogCardComponent } from "../../../core/blog-card/blog-card.component";
import { CardComponent } from "../../../core/card/card.component";
import { MailingListComponent } from "../../../core/mailing-list/mailing-list.component";
import { EventCardComponent } from "../../../core/event-card/event-card.component";
import { SmallEvent, SmallPost } from '../../../api/post.domain';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AsyncPipe,
    BlogCardComponent,
    CardComponent,
    MailingListComponent,
    EventCardComponent
]
})
export class BlogListComponent {

  protected readonly selectedKeywords = new BehaviorSubject<string[]>([]);
  protected readonly entries = combineLatest({
    events: this.postService.getEventPosts(),
    blog: this.selectedKeywords.pipe(switchMap(keywords => this.postService.getBlogPosts(keywords))),
    news: this.selectedKeywords.pipe(switchMap(keywords => this.postService.getNewsPosts(keywords))),
  })
    .pipe(map(({ events, blog, news }) => ([...events, ...blog, ...news].sort((a, b) => {
      // @ts-expect-error union type
      const aDate = Date.parse(a.published ?? a.start_time);
      // @ts-expect-error union type
      const bDate = Date.parse(b.published ?? b.start_time);
      return bDate - aDate;
    }))));
  protected readonly keywords = combineLatest({ blog: this.postService.getBlogKeywords(), news: this.postService.getNewsKeywords() })
    .pipe(map(({ blog, news }) => {
      return [...blog, ...news];
    }));

  constructor(
    private readonly postService: PostService,
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

  protected isEvent(eventOrPost: SmallEvent | SmallPost): boolean {
    return 'start_time' in eventOrPost;
  }

  protected castEvent(eventOrPost: SmallEvent | SmallPost): SmallEvent {
    return eventOrPost as SmallEvent;
  }

  protected castPost(eventOrPost: SmallEvent | SmallPost): SmallPost {
    return eventOrPost as SmallPost;
  }

  protected trackBy(_idx: number, post: SmallEvent | SmallPost): string {
    return post.slug;
  }
}
