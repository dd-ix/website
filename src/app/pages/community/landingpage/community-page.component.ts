import { Component } from '@angular/core';
import { CardComponent } from "../../../core/card/card.component";
import { API_URL } from "../../../api/api.domain";
import { IconLinuxComponent } from "../../../icons/icon-linux/icon-linux.component";
import { IconGitComponent } from "../../../icons/icon-git/icon-git.component";
import { IconFediComponent } from "../../../icons/icon-fedi/icon-fedi.component";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';
import {AsyncPipe, NgOptimizedImage} from '@angular/common';
import { LoadingIndicatorComponent } from "../../../core/loading-indicator/loading-indicator.component";
import { IconCheckmarkComponent } from "../../../icons/icon-checkmark/icon-checkmark.component";
import { IconCloseComponent } from "../../../icons/icon-close/icon-close.component";
import {IconMailComponent} from '../../../icons/icon-mail/icon-mail.component';
import {IconGlobeComponent} from '../../../icons/icon-globe/icon-globe.component';

@Component({
  selector: 'app-landingpage',
  templateUrl: './community-page.component.html',
  styleUrls: ['./community-page.component.scss'],
  imports: [
    CardComponent,
    IconLinuxComponent,
    IconGitComponent,
    IconFediComponent,
    AsyncPipe,
    LoadingIndicatorComponent,
    IconCheckmarkComponent,
    IconCloseComponent,
    IconMailComponent,
    NgOptimizedImage,
    IconGlobeComponent
  ]
})
export class CommunityPageComponent {

  protected readonly API_URL = API_URL;
  protected readonly connected = new BehaviorSubject<"unknown" | "connected" | "not_connected" | "error">("unknown");

  constructor(
    private readonly http: HttpClient,
  ) {
    this.http.get<{ is_connected: boolean }>(`${API_URL}/community/connected`)
      .pipe(map(({ is_connected }) => is_connected ? "connected" : "not_connected"))
      .subscribe({
        next: next => this.connected.next(next),
        error: error => { console.error("Failed to check if client is connected to DD-IX:", error); this.connected.next("error"); },
      });
  }
}
