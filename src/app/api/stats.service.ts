import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { API_URL } from "./api.domain";
import { Observable } from "rxjs";
import { Series, TimeSelection } from "./stats.domain";

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(
    private readonly http: HttpClient,
  ) {
  }

  public getTrafficStats(selection: TimeSelection): Observable<Series<[number, number][]>> {
    return this.http.get<Series<[number, number][]>>(`${API_URL}/stats/traffic/${selection}`);
  }

  public getAs112Stats(selection: TimeSelection): Observable<Series<Record<string, [number, number][]>>> {
    return this.http.get<Series<Record<string, [number, number][]>>>(`${API_URL}/stats/as112/${selection}`);
  }
}
