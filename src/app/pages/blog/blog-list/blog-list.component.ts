import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BlogService } from "../../../api/blog.service";
import { BehaviorSubject, combineLatest, map, Observable, switchMap } from "rxjs";
import { AsyncPipe, NgForOf, NgIf } from "@angular/common";
import { BlogCardComponent } from "../../../core/blog-card/blog-card.component";
import { CardComponent } from "../../../core/card/card.component";
import { MailingListComponent } from "../../../core/mailing-list/mailing-list.component";
import { ButtonComponent } from "@feel/form";
import { IconSendComponent } from "../../../icons/icon-send/icon-send.component";
import { EventCardComponent } from "../../../core/event-card/event-card.component";
import { SmallBlogPost, SmallEvent } from '../../../api/blog.domain';
import { eventNames } from 'node:process';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NgForOf,
    BlogCardComponent,
    CardComponent,
    MailingListComponent,
    ButtonComponent,
    IconSendComponent,
    EventCardComponent
  ]
})
export class BlogListComponent {

  protected readonly selectedKeywords = new BehaviorSubject<string[]>([]);
  protected readonly entries = combineLatest({
    events: this.blogService.getEventPosts(),
    blog: this.selectedKeywords.pipe(switchMap(keywords => this.blogService.getBlogPosts(keywords)), map(posts => posts.map(post => ({ ...post, blog: true } as SmallBlogPost)))),
    news: this.selectedKeywords.pipe(switchMap(keywords => this.blogService.getNewsPosts(keywords)), map(posts => posts.map(post => ({ ...post, news: true } as SmallBlogPost)))),
  })
    .pipe(map(({ events, blog, news }) => ([...events, ...blog, ...news].sort((a, b) => {
      // @ts-expect-error union type
      const aDate = Date.parse(a.published ?? a.start_time);
      // @ts-expect-error union type
      const bDate = Date.parse(b.published ?? b.start_time);
      return bDate - aDate;
    }))));
  protected readonly keywords = combineLatest({ blog: this.blogService.getBlogKeywords(), news: this.blogService.getNewsKeywords() })
    .pipe(map(({ blog, news }) => {
      return [...blog, ...news];
    }));

  constructor(
    private readonly blogService: BlogService,
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

  protected isEvent(eventOrPost: SmallEvent | SmallBlogPost): boolean {
    return 'start_time' in eventOrPost;
  }

  protected castEvent(eventOrPost: SmallEvent | SmallBlogPost): SmallEvent {
    return eventOrPost as SmallEvent;
  }

  protected castPost(eventOrPost: SmallEvent | SmallBlogPost): SmallBlogPost {
    return eventOrPost as SmallBlogPost;
  }

  protected trackBy(_idx: number, post: SmallEvent | SmallBlogPost): string {
    return post.slug;
  }
}
