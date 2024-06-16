import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BlogService} from "../../../api/blog.service";
import {BehaviorSubject, map, Observable, switchMap} from "rxjs";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {BlogCardComponent} from "../../../core/blog-card/blog-card.component";
import {CardComponent} from "../../../core/card/card.component";
import {MailingListComponent} from "../../../core/mailing-list/mailing-list.component";
import {EventCardComponent} from "../../../core/event-card/event-card.component";

@Component({
  selector: 'app-blog-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NgForOf,
    BlogCardComponent,
    CardComponent,
    MailingListComponent,
    EventCardComponent
  ]
})
export class EventListComponent {

  protected readonly events =  this.blogService.getEventPosts();

  constructor(
    private readonly blogService: BlogService,
  ) {
  }
}
