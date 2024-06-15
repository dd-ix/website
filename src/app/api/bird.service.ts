import {Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {API_URL} from "./api.domain";

@Injectable({
  providedIn: 'root'
})
export class BirdService {

  constructor(
    private readonly http: HttpClient,
  ) {
  }

  public getBird(): Observable<string> {
    return this.http.get(`${API_URL}/bird`, {responseType: "text"});
  }
}
