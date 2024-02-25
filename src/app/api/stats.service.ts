import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_URL} from "./api.domain";
import {Observable} from "rxjs";
import {Stats} from "./stats.domain";

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(
    private readonly http: HttpClient,
  ) {
  }

  public getStats(): Observable<Stats> {
    return this.http.get<Stats>(`${API_URL}/stats`);
  }
}
