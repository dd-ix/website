import {ChangeDetectionStrategy, Component, Inject, SecurityContext} from '@angular/core';
import {BlogService} from "../../../api/blog.service";
import {ActivatedRoute} from "@angular/router";
import {switchMap, tap} from "rxjs";
import {DomSanitizer, Meta, Title} from "@angular/platform-browser";
import {API_URL} from "../../../api/api.domain";
import {CardComponent} from "../../../core/card/card.component";
import {AsyncPipe, DatePipe, NgIf} from "@angular/common";
import {RelativeTimePipe} from "../../../core/pipes/relative-time.pipe";
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-event-post',
    templateUrl: './event-post.component.html',
    styleUrls: ['./event-post.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CardComponent,
        AsyncPipe,
        NgIf,
        DatePipe,
        RelativeTimePipe,
        DatePipe
    ]
})
export class EventPostComponent {

  protected readonly post = this.activatedRoute.params.pipe(
    switchMap(({slug}) => this.blogService.getEvent(slug)),
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
      if (post.link != null) {
        this.document.location.href = post.link;
      }
      if (post.image) {
        const image = this.buildEventImageUrl(post.image);
        this.meta.updateTag({property: 'og:image', content: image});
        this.meta.updateTag({name: 'twitter:image', content: image});
      }

    }),
  );
  constructor(
    private readonly blogService: BlogService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly meta: Meta,
    private readonly title: Title,
    private readonly sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  protected formatAuthors(authors: string[]): string {
    return authors.join(', ');
  }

  protected safeHtml(html: string): string | null {
    html = html.replaceAll(/src="([^"]+)"/g, `src="${this.buildEventImageUrl("$1")}"`);

    return this.sanitizer.sanitize(SecurityContext.HTML, html);
  }

  protected buildEventImageUrl(image: string): string {
    return new URL(`${API_URL}/event/assets/${image}`).toString();
  }
}
