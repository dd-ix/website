import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NewsService} from "../../../api/news.service";
import {ActivatedRoute} from "@angular/router";
import {switchMap, tap} from "rxjs";
import {Language} from "../../../api/news.domain";
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-news-post',
  templateUrl: './news-post.component.html',
  styleUrls: ['./news-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsPostComponent {

  protected readonly post = this.activatedRoute.params.pipe(
    switchMap(({slug}) => this.newsService.getPost(Language.GERMAN, slug)),
    tap(post => {
      this.meta.updateTag({name: "description", content: post.description});
      this.meta.updateTag({name: "keywords", content: post.keywords.join(", ")});
    })
  );

  constructor(
    private readonly newsService: NewsService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly meta: Meta,
  ) {
  }

  protected formatAuthors(authors: string[]): string {
    return authors.join(', ');
  }
}
