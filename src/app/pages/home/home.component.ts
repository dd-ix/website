import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { PostService } from "../../api/post.service";
import { IconGithubComponent } from "../../icons/icon-github/icon-github.component";
import { IconMastodonComponent } from "../../icons/icon-mastodon/icon-mastodon.component";
import { IconLinkedinComponent } from "../../icons/icon-linkedin/icon-linkedin.component";
import { combineLatest, map, share, switchMap } from "rxjs";
import { IconIbhComponent } from "../../icons/icon-ibh/icon-ibh.component";
import { IconBcixComponent } from "../../icons/icon-bcix/icon-bcix.component";
import { IconTudComponent } from "../../icons/icon-tud/icon-tud.component";
import { CardComponent } from "../../core/card/card.component";
import { BlogCardComponent } from "../../core/blog-card/blog-card.component";
import { IconFrauenkircheComponent } from "../../icons/icon-frauenkirche/icon-frauenkirche.component";
import { IconInternetComponent } from "../../icons/icon-internet/icon-internet.component";
import { IconSocialComponent } from "../../icons/icon-social/icon-social.component";
import { IconSendComponent } from "../../icons/icon-send/icon-send.component";
import { ButtonComponent } from "@feel/form";
import { IconDsiComponent } from "../../icons/icon-dsi/icon-dsi.component";
import { EventCardComponent } from "../../core/event-card/event-card.component";
import { IconInterLinkComponent } from "../../icons/icon-inter-link/icon-inter-link.component";
import {IconNetdComponent} from "../../icons/icon-netd/icon-netd.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, IconGithubComponent, IconLinkedinComponent, IconMastodonComponent, IconIbhComponent, IconBcixComponent, IconTudComponent, CardComponent, BlogCardComponent, IconFrauenkircheComponent, IconInternetComponent, IconSocialComponent, IconSendComponent, ButtonComponent, IconDsiComponent, AsyncPipe, EventCardComponent, IconInterLinkComponent, IconNetdComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  protected readonly events = this.postService.getUpComingEvents()
    .pipe(map(events => events.slice(0, 3)), share());

  protected readonly newsAndEventPosts = this.events
    .pipe(
      switchMap(events => combineLatest({
        news: this.postService.getNewsPosts(),
        blog: this.postService.getBlogPosts(),
      })
        .pipe(map(({ news, blog }) => {
          const posts = [...news, ...blog];
          posts.sort((a, b) => Date.parse(b.published) - Date.parse(a.published));
          return posts.slice(0, 3 - events.length)
        }
        ))
      )
    );

  protected readonly blogPosts = this.postService.getBlogPosts();

  constructor(
    private readonly postService: PostService,
  ) {
  }
}
