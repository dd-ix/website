import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from "../card/card.component";
import {SmallBlogPost} from "../../api/blog.domain";
import {API_URL} from "../../api/api.domain";

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent {

  @Input()
  public post: SmallBlogPost | undefined;

  protected buildPostLink(slug: string): string {
    return `/blog/${slug}`;
  }

  protected buildBlogImageUrl(image: string | null): string | null {
    if (!image) {
      return null;
    }

    return new URL(`${API_URL}/blog/assets/${image}`).toString();
  }
}
