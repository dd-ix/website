import { ChangeDetectionStrategy, Component, SecurityContext } from '@angular/core';
import { BlogService } from "../../../api/blog.service";
import { ActivatedRoute, Router } from "@angular/router";
import { catchError, of, switchMap, tap, throwError } from "rxjs";
import { DomSanitizer, Meta, Title } from "@angular/platform-browser";
import { API_URL } from "../../../api/api.domain";
import { CardComponent } from "../../../core/card/card.component";
import { AsyncPipe, DatePipe, NgIf } from "@angular/common";

@Component({
    selector: 'app-blog-post',
    templateUrl: './blog-post.component.html',
    styleUrls: ['./blog-post.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CardComponent,
        AsyncPipe,
        NgIf,
        DatePipe
    ]
})
export class BlogPostComponent {

  protected readonly post = this.activatedRoute.params.pipe(
    switchMap(({ slug }) => this.blogService.getBlogPost(slug)),
    tap(post => {
      this.title.setTitle(`${post.title} | Dresden Internet Exchange`);
      this.meta.updateTag({ property: 'og:title', content: post.title });
      this.meta.updateTag({ name: 'twitter:title', content: post.title });
      this.meta.updateTag({ property: 'og:type', content: 'article' });
      this.meta.updateTag({ name: "description", content: post.description });
      this.meta.updateTag({ property: "og:description", content: post.description });
      this.meta.updateTag({ name: "twitter:description", content: post.description });
      this.meta.updateTag({
        name: "keywords",
        content: 'Dresden Internet Exchange, Dresden, Internet Exchange, DD-IX, ddix, DD-IX Dresden Internet Exchange e.V., ' + post.keywords.join(", ")
      });

      if (post.image) {
        const image = this.buildBlogImageUrl(post.image);
        this.meta.updateTag({ property: 'og:image', content: image });
        this.meta.updateTag({ name: 'twitter:image', content: image });
      }
    }),
    catchError(error => {
      if ("status" in error && error.status === 404) {
        this.router.navigateByUrl(`/news/${error["url"].split("/").at(-1)}`);
      }

      return throwError(() => error);
    })
  );

  constructor(
    private readonly blogService: BlogService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly meta: Meta,
    private readonly title: Title,
    private readonly sanitizer: DomSanitizer,
    private readonly router: Router,
  ) {
  }

  protected formatAuthors(authors: string[]): string {
    return authors.join(', ');
  }

  protected safeHtml(html: string): string | null {
    html = html.replaceAll(/src="([^"]+)"/g, `src="${this.buildBlogImageUrl("$1")}"`);

    return this.sanitizer.sanitize(SecurityContext.HTML, html);
  }

  protected buildBlogImageUrl(image: string): string {
    return new URL(`${API_URL}/blog/assets/${image}`).toString();
  }
}
