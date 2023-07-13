import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Language, Post, SmallPost} from "./news.domain";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private readonly http: HttpClient,
  ) {
  }

  public getPosts(): Observable<SmallPost[]> {
    return this.http.get<SmallPost[]>("http://localhost:8080/news");
  }

  public getPost(lang: Language, slug: string): Observable<Post> {
    return this.http.get<Post>(`http://localhost:8080/news/${lang}/${slug}`);
  }
}
