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
      this.meta.updateTag({property: 'og:title', content: post.title});
      this.meta.updateTag({name: 'twitter:title', content: post.title});
      this.meta.updateTag({property: 'og:type', content: 'article'});
      this.meta.updateTag({name: "description", content: post.description});
      this.meta.updateTag({property: "og:description", content: post.description});
      this.meta.updateTag({name: "twitter:description", content: post.description});
      this.meta.updateTag({name: "keywords", content: post.keywords.join(", ")});

      if (post.image) {
        const image = this.buildNewsImageUrl(post.image);
        this.meta.updateTag({property: 'og:image', content: image});
        this.meta.updateTag({name: 'twitter:image', content: image});
      }
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
    html = html.replaceAll(/src="([^"]+)"/g, `src="${this.buildNewsImageUrl("$1")}"`);

    return this.sanitizer.sanitize(SecurityContext.HTML, html);
  }

  protected buildNewsImageUrl(image: string): string {
    return new URL(`${API_URL}/news/assets/${image}`).toString();
  }
}
