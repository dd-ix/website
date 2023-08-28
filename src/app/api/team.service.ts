import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {BehaviorSubject, Observable, switchMap, tap} from "rxjs";
import {Document} from "./documents.domain";
import {HttpClient} from "@angular/common/http";
import {API_URL, Language} from "./api.domain";
import {TeamMember} from "./team.domain";

const MAX_AGE = 1000 * 60 * 60 * 24;

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private readonly team = new BehaviorSubject<TeamMember[]>([]);
  private nextUpdate = 0;

  constructor(
    private readonly http: HttpClient,
    @Inject(LOCALE_ID) private readonly lang: Language,
  ) {
  }

  public getTeam(): Observable<TeamMember[]> {
    if (this.nextUpdate > Date.now()) {
      return this.team;
    }

    this.nextUpdate = Date.now() + MAX_AGE;

    return this.http.get<TeamMember[]>(`${API_URL}/team/${this.lang}`)
      .pipe(
        tap(team => this.team.next(team)),
        switchMap(() => this.team),
      );
  }
}
