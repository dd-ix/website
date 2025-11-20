import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { API_URL } from './api.domain';

const MAX_AGE = 1000 * 60 * 60 * 24;

export interface Mirror {
  name: string,
  url: string,
  operator: string,
}

@Injectable({
  providedIn: 'root',
})
export class MirrorService {

  private readonly mirrors = new BehaviorSubject<Mirror[]>([]);
  private nextUpdate = 0;

  constructor(
    private readonly http: HttpClient,
  ) {
  }

  public getMirrors(): Observable<Mirror[]> {
    if (this.nextUpdate > Date.now()) {
      return this.mirrors;
    }

    this.nextUpdate = Date.now() + MAX_AGE;

    return this.http.get<Mirror[]>(`${API_URL}/mirrors`)
      .pipe(
        tap(mirrors => this.mirrors.next(mirrors)),
        switchMap(() => this.mirrors),
      );
  }

}
