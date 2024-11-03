import { Component, OnInit, SecurityContext } from '@angular/core';
import { tap } from 'rxjs';
import { BlogService } from '../../../api/blog.service';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { AsyncPipe, DatePipe, NgIf, NgOptimizedImage } from '@angular/common';
import { API_URL } from '../../../api/api.domain';
import { CardComponent } from "../../../core/card/card.component";
import { ButtonComponent } from '@feel/form';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-event-opening',
  standalone: true,
  imports: [NgIf, AsyncPipe, DatePipe, CardComponent, ButtonComponent, NgOptimizedImage],
  templateUrl: './event-opening.component.html',
  styleUrl: './event-opening.component.scss'
})
export class EventOpeningComponent implements OnInit {

  protected readonly post = this.blogService.getEvent("opening").pipe(
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
        const image = this.buildEventImageUrl(post.image);
        this.meta.updateTag({ property: 'og:image', content: image });
        this.meta.updateTag({ name: 'twitter:image', content: image });
      }
    }),
  );

  constructor(
    private readonly blogService: BlogService,
    private readonly meta: Meta,
    private readonly title: Title,
    private readonly sanitizer: DomSanitizer,
    private readonly router: Router,
  ) {
  }

  public ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (!("url" in event)) {
        return;
      }

      const tree = this.router.parseUrl(event.url);
      if (tree.fragment) {
        const element = document.querySelector("#" + tree.fragment);
        if (element) { element.scrollIntoView(); }
      }
    });
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
