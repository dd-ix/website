import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap, tap } from "rxjs";
import { Post } from "./post.domain";
import { HttpClient } from "@angular/common/http";
import { API_URL, Language, MAX_CACHE_AGE } from "./api.domain";
import { TextBlock } from "./text-blocks.domain";

interface Entry {
  nextUpdate: number,
  textBlock: TextBlock,
}

@Injectable({
  providedIn: 'root'
})
export class TextBlocksService {

  private readonly textBlocks = new BehaviorSubject<Record<string, Entry>>({});

  constructor(
    private readonly http: HttpClient,
    @Inject(LOCALE_ID) private readonly lang: Language,
  ) {
  }

  public getTextBlock(slug: string): Observable<TextBlock> {
    return this.textBlocks.pipe(
      switchMap(textBlocks => {
        const block = textBlocks[slug];

        if (block && block.nextUpdate > Date.now()) {
          return of(block.textBlock);
        } else {
          return this.loadTextBlock(slug);
        }
      }),
    );
  }

  private loadTextBlock(slug: string): Observable<TextBlock> {
    return this.http.get<Post>(`${API_URL}/text-blocks/${this.lang}/${slug}`)
      .pipe(tap(textBlock => {
        const textBlocks: Record<string, Entry> = JSON.parse(JSON.stringify(this.textBlocks.value));
        textBlocks[slug] = {
          nextUpdate: Date.now() + MAX_CACHE_AGE,
          textBlock,
        };
        this.textBlocks.next(textBlocks);
      }));
  }
}
