import {ChangeDetectionStrategy, Component, SecurityContext} from '@angular/core';
import {NewsService} from "../../../api/news.service";
import {ActivatedRoute} from "@angular/router";
import {switchMap, tap} from "rxjs";
import {DomSanitizer, Meta} from "@angular/platform-browser";
import {API_URL} from "../../../api/api.domain";

@Component({
  selector: 'app-news-post',
  templateUrl: './news-post.component.html',
  styleUrls: ['./news-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsPostComponent {

  protected readonly post = this.activatedRoute.params.pipe(
    switchMap(({slug}) => this.newsService.getPost(slug)),
    tap(post => {
      this.meta.updateTag({name: "description", content: post.description});
      this.meta.updateTag({name: "keywords", content: post.keywords.join(", ")});
    }),
  );

  constructor(
    private readonly newsService: NewsService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly meta: Meta,
    private readonly sanitizer: DomSanitizer
  ) {
  }

  protected formatAuthors(authors: string[]): string {
    return authors.join(', ');
  }

  protected safeHtml(html: string): string | null {
    return this.sanitizer.sanitize(SecurityContext.HTML, html);
  }

  protected buildNewsImageUrl(image: string): string {
    return new URL(`${API_URL}/news/assets/${image}`).toString();
  }
}
