import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, switchMap, tap} from "rxjs";
import {Language, Post, SmallPost} from "./news.domain";

const MAX_AGE = 1000 * 60 * 60 * 24;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private readonly posts = new BehaviorSubject<SmallPost[]>([]);
  private nextUpdate = 0;

  constructor(
    private readonly http: HttpClient,
    @Inject(LOCALE_ID) private readonly lang: Language,
  ) {
  }

  public getPosts(): Observable<SmallPost[]> {
    if (this.nextUpdate > Date.now()) {
      return this.posts;
    }

    this.nextUpdate = Date.now() + MAX_AGE;

    return this.http.get<SmallPost[]>(`http://127.0.0.1:8080/news/${this.lang}`)
      .pipe(
        tap(posts => this.posts.next(posts)),
        switchMap(() => this.posts),
      );
  }

  public getPost(slug: string): Observable<Post> {
    return this.http.get<Post>(`http://127.0.0.1:8080/news/${this.lang}/${slug}`);
  }
}
