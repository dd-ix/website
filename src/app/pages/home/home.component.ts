import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {NewsService} from "../../api/news.service";
import {RouterLink} from "@angular/router";
import {IconGithubComponent} from "../../icons/icon-github/icon-github.component";
import {IconMastodonComponent} from "../../icons/icon-mastodon/icon-mastodon.component";
import {IconLinkedinComponent} from "../../icons/icon-linkedin/icon-linkedin.component";
import {map} from "rxjs";
import {IconIbhComponent} from "../../icons/icon-ibh/icon-ibh.component";
import {IconBcixComponent} from "../../icons/icon-bcix/icon-bcix.component";
import {IconTudComponent} from "../../icons/icon-tud/icon-tud.component";
import {CardComponent} from "../../core/card/card.component";
import {NewsCardComponent} from "../../core/news-card/news-card.component";
import {TextBlockComponent} from "../../core/text-block/text-block.component";
import {IconFrauenkircheComponent} from "../../icons/icon-frauenkirche/icon-frauenkirche.component";
import {IconInternetComponent} from "../../icons/icon-internet/icon-internet.component";
import {IconSocialComponent} from "../../icons/icon-social/icon-social.component";
import {IconSendComponent} from "../../icons/icon-send/icon-send.component";
import {ButtonComponent} from "@feel/form";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, IconGithubComponent, IconLinkedinComponent, IconMastodonComponent, IconIbhComponent, IconBcixComponent, IconTudComponent, CardComponent, NewsCardComponent, TextBlockComponent, NgOptimizedImage, IconFrauenkircheComponent, IconInternetComponent, IconSocialComponent, IconSendComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  protected readonly posts = this.newsService.getPosts()
    .pipe(map(posts => posts.filter((_, idx, all) => (all.length - idx) < 3)));

  constructor(
    private readonly newsService: NewsService,
  ) {
  }
}
