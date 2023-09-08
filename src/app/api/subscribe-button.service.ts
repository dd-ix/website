import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, switchMap, tap} from "rxjs";
import {Post, SmallPost} from "./news.domain";
import {API_URL, Language, MAX_CACHE_AGE} from "./api.domain";
import { map } from 'rxjs/operators'
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class SubscribeButtonService {
  private mailApi = `${API_URL}/mailing_lists/8`
  constructor(private readonly http: HttpClient) {}


  SubscribeUser(input: any) {
    return this.http.post(this.mailApi, input, { })
      .pipe(
        map(
          (response) => {
            if (response) {
              return response;
            }else{
              return null;
            }
          },
          (error: any) => {
            return error;
          }
        )
      )
  }
}
