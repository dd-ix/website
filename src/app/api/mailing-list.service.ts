import {Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {API_URL} from "./api.domain";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MailingListService {

  constructor(
    private readonly http: HttpClient
  ) {
  }

  public subscribe(listId: number, email: string): Observable<void> {
    return this.http.post(`${API_URL}/mailing_lists/${listId}`, {email})
      .pipe(map(() => void 0));
  }
}
