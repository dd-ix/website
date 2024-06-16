import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import {Observable} from "rxjs";
import {Post, SmallBlogPost, SmallEvent} from "./blog.domain";
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

  public getEvents(keywords?: string[]): Observable<SmallEvent[]> {
    let params = new HttpParams()
    if (keywords?.length) {
      params = params.set("keywords", keywords.join(","));
    }

    return this.http.get<SmallEvent[]>(`${API_URL}/event/${this.lang}/all`, {params});
  }

  public getUpComingEvents(): Observable<SmallEvent[]> {
    return this.http.get<SmallEvent[]>(`${API_URL}/event/${this.lang}/upcoming`);
  }

  public getPosts(keywords?: string[]): Observable<SmallBlogPost[]> {
    let params = new HttpParams()
    if (keywords?.length) {
      params = params.set("keywords", keywords.join(","));
    }

    return this.http.get<SmallBlogPost[]>(`${API_URL}/blog/${this.lang}`, {params});
  }

  public getPost(slug: string): Observable<Post> {
    return this.http.get<Post>(`${API_URL}/blog/${this.lang}/${slug}`);
  }

  public getEvent(slug: string): Observable<Post> {
    return this.http.get<Post>(`${API_URL}/event/${this.lang}/${slug}`);
  }

  public getBlogKeywords(): Observable<string[]> {
    return this.http.get<string[]>(`${API_URL}/blog/keywords`);
  }

  public getEventKeywords(): Observable<string[]> {
    return this.http.get<string[]>(`${API_URL}/event/keywords`);
  }
}
