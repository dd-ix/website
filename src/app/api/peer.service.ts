import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, switchMap, tap} from "rxjs";
import {Peer} from "./peer.domain";
import { HttpClient } from "@angular/common/http";
import {API_URL} from "./api.domain";

const MAX_AGE = 1000 * 60 * 60 * 24;

@Injectable({
  providedIn: 'root'
})
export class PeerService {

  private readonly peers = new BehaviorSubject<Peer[]>([]);
  private nextUpdate = 0;

  constructor(
    private readonly http: HttpClient,
  ) {
  }

  public getPeers(): Observable<Peer[]> {
    if (this.nextUpdate > Date.now()) {
      return this.peers;
    }

    this.nextUpdate = Date.now() + MAX_AGE;

    return this.http.get<Peer[]>(`${API_URL}/peers`)
      .pipe(
        tap(peers => this.peers.next(peers)),
        switchMap(() => this.peers),
      );
  }
}
