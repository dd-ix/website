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

  public getTrafficStats(): Observable<Stats> {
    return this.http.get<Stats>(`${API_URL}/stats/traffic`);
  }

  public getAs112Stats(): Observable<Stats> {
    return this.http.get<Stats>(`${API_URL}/stats/as112`);
  }
}
