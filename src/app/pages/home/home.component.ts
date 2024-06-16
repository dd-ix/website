import {Component} from '@angular/core';
import {AsyncPipe, CommonModule, NgOptimizedImage} from '@angular/common';
import {BlogService} from "../../api/blog.service";
import {RouterLink} from "@angular/router";
import {IconGithubComponent} from "../../icons/icon-github/icon-github.component";
import {IconMastodonComponent} from "../../icons/icon-mastodon/icon-mastodon.component";
import {IconLinkedinComponent} from "../../icons/icon-linkedin/icon-linkedin.component";
import {map, Observable, share, switchMap} from "rxjs";
import {IconIbhComponent} from "../../icons/icon-ibh/icon-ibh.component";
import {IconBcixComponent} from "../../icons/icon-bcix/icon-bcix.component";
import {IconTudComponent} from "../../icons/icon-tud/icon-tud.component";
import {CardComponent} from "../../core/card/card.component";
import {BlogCardComponent} from "../../core/blog-card/blog-card.component";
import {TextBlockComponent} from "../../core/text-block/text-block.component";
import {IconFrauenkircheComponent} from "../../icons/icon-frauenkirche/icon-frauenkirche.component";
import {IconInternetComponent} from "../../icons/icon-internet/icon-internet.component";
import {IconSocialComponent} from "../../icons/icon-social/icon-social.component";
import {IconSendComponent} from "../../icons/icon-send/icon-send.component";
import {ButtonComponent} from "@feel/form";
import {IconDsiComponent} from "../../icons/icon-dsi/icon-dsi.component";
import {PostOrEvent, SmallEvent} from "../../api/blog.domain";
import {EventCardComponent} from "../../core/event-card/event-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, IconGithubComponent, IconLinkedinComponent, IconMastodonComponent, IconIbhComponent, IconBcixComponent, IconTudComponent, CardComponent, BlogCardComponent, TextBlockComponent, NgOptimizedImage, IconFrauenkircheComponent, IconInternetComponent, IconSocialComponent, IconSendComponent, ButtonComponent, IconDsiComponent, AsyncPipe, EventCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  protected readonly events = this.blogService.getUpComingEvents()
    .pipe(map(events => events.slice(0, 3)), share());

  protected readonly posts = this.events
    .pipe(switchMap(events => this.blogService.getBlogPosts()
        .pipe(map(posts => posts.slice(0, 3 - events.length)))
      )
    )

  constructor(
    private readonly blogService: BlogService,
  ) {
  }
}
