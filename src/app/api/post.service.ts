import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { Post, SmallPost, SmallEvent, EventPost, PostKind } from "./post.domain";
import { API_URL, Language } from "./api.domain";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private readonly http: HttpClient,
    @Inject(LOCALE_ID) private readonly lang: Language,
  ) {
  }

  public getBlogKeywords(): Observable<string[]> {
    return this.http.get<string[]>(`${API_URL}/blog/keywords`);
  }

  public getNewsKeywords(): Observable<string[]> {
    return this.http.get<string[]>(`${API_URL}/news/keywords`);
  }

  public getBlogPosts(keywords?: string[]): Observable<SmallPost[]> {
    let params = new HttpParams()
    if (keywords?.length) {
      params = params.set("keywords", keywords.join(","));
    }

    return this.http.get<SmallPost[]>(`${API_URL}/blog/${this.lang}`, { params })
      .pipe(map(posts => {
        return posts.map(post => ({ ...post, kind: PostKind.Blog }))
      }));
  }

  public getNewsPosts(keywords?: string[]): Observable<SmallPost[]> {
    let params = new HttpParams()
    if (keywords?.length) {
      params = params.set("keywords", keywords.join(","));
    }

    return this.http.get<SmallPost[]>(`${API_URL}/news/${this.lang}`, { params })
      .pipe(map(posts => {
        return posts.map(post => ({ ...post, kind: PostKind.News }))
      }));
  }

  public getBlogPost(slug: string): Observable<Post> {
    return this.http.get<Post>(`${API_URL}/blog/${this.lang}/${slug}`)
      .pipe(map(post => {
        return { ...post, kind: PostKind.Blog };
      }));
  }

  public getNewsPost(slug: string): Observable<Post> {
    return this.http.get<Post>(`${API_URL}/news/${this.lang}/${slug}`)
      .pipe(map(post => {
        return { ...post, news: PostKind.News };
      }));
  }

  public getEventPosts(): Observable<SmallEvent[]> {
    return this.http.get<SmallEvent[]>(`${API_URL}/event/${this.lang}/all`);
  }

  public getUpComingEvents(): Observable<SmallEvent[]> {
    return this.http.get<SmallEvent[]>(`${API_URL}/event/${this.lang}/upcoming`);
  }

  public getEvent(slug: string): Observable<EventPost> {
    return this.http.get<EventPost>(`${API_URL}/event/${this.lang}/${slug}`);
  }
}
