import {ChangeDetectionStrategy, Component, SecurityContext} from '@angular/core';
import {PostService} from "../../../api/post.service";
import {ActivatedRoute} from "@angular/router";
import {switchMap, tap} from "rxjs";
import {DomSanitizer, Meta, Title} from "@angular/platform-browser";
import {API_URL} from "../../../api/api.domain";
import {CardComponent} from "../../../core/card/card.component";
import {AsyncPipe, DatePipe} from "@angular/common";

@Component({
  selector: 'app-news-post',
  templateUrl: './news-post.component.html',
  styleUrls: ['./news-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CardComponent,
    AsyncPipe,
    DatePipe
  ]
})
export class NewsPostComponent {

  protected readonly post;

  constructor(
    private readonly postService: PostService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly meta: Meta,
    private readonly title: Title,
    private readonly sanitizer: DomSanitizer
  ) {
    this.post = this.activatedRoute.params.pipe(
      switchMap(({slug}) => this.postService.getNewsPost(slug)),
      tap(post => {
        this.title.setTitle(`${post.title} | Dresden Internet Exchange`);
        this.meta.updateTag({property: 'og:title', content: post.title});
        this.meta.updateTag({name: 'twitter:title', content: post.title});
        this.meta.updateTag({property: 'og:type', content: 'article'});
        this.meta.updateTag({name: "description", content: post.description});
        this.meta.updateTag({property: "og:description", content: post.description});
        this.meta.updateTag({name: "twitter:description", content: post.description});
        this.meta.updateTag({
          name: "keywords",
          content: 'Dresden Internet Exchange, Dresden, Internet Exchange, DD-IX, ddix, DD-IX Dresden Internet Exchange e.V., ' + post.keywords.join(", ")
        });

        if (post.image) {
          const image = this.buildBlogImageUrl(post.image);
          this.meta.updateTag({property: 'og:image', content: image});
          this.meta.updateTag({name: 'twitter:image', content: image});
        }
      }),
    );
  }

  protected formatAuthors(authors: string[]): string {
    return authors.join(', ');
  }

  protected safeHtml(html: string): string | null {
    html = html.replaceAll(/src="([^"]+)"/g, `src="${this.buildBlogImageUrl("$1")}"`);

    return this.sanitizer.sanitize(SecurityContext.HTML, html);
  }

  protected buildBlogImageUrl(image: string): string {
    return new URL(`${API_URL}/news/assets/${image}`).toString();
  }
}
