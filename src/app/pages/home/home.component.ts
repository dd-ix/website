import {Component, SecurityContext} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsService} from "../../api/news.service";
import {RouterLink} from "@angular/router";
import {IconGithubComponent} from "../../icons/icon-github/icon-github.component";
import {IconMastodonComponent} from "../../icons/icon-mastodon/icon-mastodon.component";
import {map} from "rxjs";
import {TextBlocksService} from "../../api/text-blocks.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, IconGithubComponent, IconMastodonComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  protected readonly landingpage = this.textBlocksService.getTextBlock("landingpage");
  protected readonly posts = this.newsService.getPosts()
    .pipe(map(posts => posts.filter((_, idx, all) => (all.length - idx) < 4)));

  constructor(
    private readonly textBlocksService: TextBlocksService,
    private readonly newsService: NewsService,
    private readonly sanitizer: DomSanitizer,
  ) {
  }

  protected buildPostLink(slug: string): string {
    return `/news/${slug}`;
  }

  protected safeHtml(html: string): string | null {
    return this.sanitizer.sanitize(SecurityContext.HTML, html);
  }
}
