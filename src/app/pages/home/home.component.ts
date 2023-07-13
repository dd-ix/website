import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsService} from "../../api/news.service";
import {RouterLink} from "@angular/router";
import {IconGithubComponent} from "../../icons/icon-github/icon-github.component";
import {IconMastodonComponent} from "../../icons/icon-mastodon/icon-mastodon.component";
import {map} from "rxjs";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, IconGithubComponent, IconMastodonComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  protected readonly posts = this.newsService.getPosts()
    .pipe(map(posts => posts.filter((_, idx, all) => (all.length - idx) < 4)));

  constructor(
    private readonly newsService: NewsService,
  ) {
  }

  protected buildPostLink(slug: string): string {
    return `/news/${slug}`;
  }
}
