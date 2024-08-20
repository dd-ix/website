import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import {Observable} from "rxjs";
import {Post, SmallBlogPost, SmallEvent, EventPost} from "./blog.domain";
import {API_URL, Language} from "./api.domain";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
    private readonly http: HttpClient,
    @Inject(LOCALE_ID) private readonly lang: Language,
  ) {
  }

  public getBlogKeywords(): Observable<string[]> {
    return this.http.get<string[]>(`${API_URL}/news/keywords`);
  }

  public getBlogPosts(keywords?: string[]): Observable<SmallBlogPost[]> {
    let params = new HttpParams()
    if (keywords?.length) {
      params = params.set("keywords", keywords.join(","));
    }

    return this.http.get<SmallBlogPost[]>(`${API_URL}/blog/${this.lang}`, {params});
  }

  public getNewsPosts(keywords?: string[]): Observable<SmallBlogPost[]> {
    let params = new HttpParams()
    if (keywords?.length) {
      params = params.set("keywords", keywords.join(","));
    }

    return this.http.get<SmallBlogPost[]>(`${API_URL}/blog/${this.lang}`, {params});
  }

  public getBlogPost(slug: string): Observable<Post> {
    return this.http.get<Post>(`${API_URL}/blog/${this.lang}/${slug}`);
  }

  public getNewsPost(slug: string): Observable<Post> {
    return this.http.get<Post>(`${API_URL}/blog/${this.lang}/${slug}`);
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
