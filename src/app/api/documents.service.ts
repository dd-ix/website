import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {BehaviorSubject, Observable, switchMap, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Document} from "./documents.domain";
import {API_URL, Language} from "./api.domain";

const MAX_AGE = 1000 * 60 * 60 * 24;

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  private readonly documents = new BehaviorSubject<Document[]>([]);
  private nextUpdate = 0;

  constructor(
    private readonly http: HttpClient,
    @Inject(LOCALE_ID) private readonly lang: Language,
  ) {
  }

  public getDocuments(): Observable<Document[]> {
    if (this.nextUpdate > Date.now()) {
      return this.documents;
    }

    this.nextUpdate = Date.now() + MAX_AGE;

    return this.http.get<Document[]>(`${API_URL}/documents/${this.lang}`)
      .pipe(
        tap(documents => this.documents.next(documents)),
        switchMap(() => this.documents),
      );
  }
}
