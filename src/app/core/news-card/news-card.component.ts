import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from "../card/card.component";
import {SmallPost} from "../../api/news.domain";
import {API_URL} from "../../api/api.domain";

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent {

  @Input()
  public post: SmallPost | undefined;

  protected buildPostLink(slug: string): string {
    return `/news/${slug}`;
  }

  protected buildNewsImageUrl(image: string | null): string | null {
    if (!image) {
      return null;
    }

    return `${API_URL}/news/assets/${image}`;
  }
}
