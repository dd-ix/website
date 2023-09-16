import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post, SmallPost} from "./news.domain";
import {API_URL, Language} from "./api.domain";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private readonly http: HttpClient,
    @Inject(LOCALE_ID) private readonly lang: Language,
  ) {
  }

  public getPosts(keywords?: string[]): Observable<SmallPost[]> {
    let params = new HttpParams()
    if (keywords?.length) {
      params = params.set("keywords", keywords.join(","));
    }

    return this.http.get<SmallPost[]>(`${API_URL}/news/${this.lang}`, {params});
  }

  public getPost(slug: string): Observable<Post> {
    return this.http.get<Post>(`${API_URL}/news/${this.lang}/${slug}`);
  }

  public getKeywords(): Observable<string[]> {
    return this.http.get<string[]>(`${API_URL}/news/keywords`);
  }
}
