import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../card/card.component";
import { PostKind, SmallPost } from "../../api/post.domain";
import { API_URL } from "../../api/api.domain";

@Component({
  selector: 'app-blog-card',
  imports: [CommonModule, CardComponent],
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent {

  @Input()
  public post: SmallPost | undefined;

  protected buildPostLink(kind: PostKind | undefined, slug: string): string {
    return kind === PostKind.Blog ? `/blog/${slug}` : `/news/${slug}`;
  }

  protected buildBlogImageUrl(kind: PostKind | undefined, image: string | null): string | null {
    if (!image) {
      return null;
    }

    return new URL(`${API_URL}/${kind === PostKind.Blog ? 'blog' : 'news'}/assets/${image}`).toString();
  }
}
