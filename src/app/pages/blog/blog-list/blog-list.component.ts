import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BlogService} from "../../../api/blog.service";
import {BehaviorSubject, map, Observable, switchMap} from "rxjs";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {BlogCardComponent} from "../../../core/blog-card/blog-card.component";
import {CardComponent} from "../../../core/card/card.component";
import {MailingListComponent} from "../../../core/mailing-list/mailing-list.component";
import {ButtonComponent} from "@feel/form";
import {IconSendComponent} from "../../../icons/icon-send/icon-send.component";

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
    IconSendComponent
  ]
})
export class BlogListComponent {

  protected readonly selectedKeywords = new BehaviorSubject<string[]>([]);
  protected readonly posts = this.selectedKeywords.pipe(switchMap(keywords => this.blogService.getBlogPosts(keywords)));
  protected readonly keywords = this.blogService.getBlogKeywords();

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
}
