import { Component } from '@angular/core';

import { PeerService } from "../../api/peer.service";
import { AsyncPipe } from "@angular/common";
import { CardComponent } from "../../core/card/card.component";
import { IconCheckmarkComponent } from "../../icons/icon-checkmark/icon-checkmark.component";
import { Speed } from "../../api/peer.domain";
import { IconCloseComponent } from "../../icons/icon-close/icon-close.component";
import { ButtonComponent } from "@feel/form";
import { IconSendComponent } from "../../icons/icon-send/icon-send.component";
import { RouterLink } from "@angular/router";
import { IconPopMapComponent } from "../../icons/icon-pop-map/icon-pop-map.component";
import { LoadingIndicatorComponent } from '../../core/loading-indicator/loading-indicator.component';

@Component({
  selector: 'app-network',
  imports: [
    AsyncPipe,
    CardComponent,
    IconCheckmarkComponent,
    IconCloseComponent,
    ButtonComponent,
    IconSendComponent,
    RouterLink,
    IconPopMapComponent,
    LoadingIndicatorComponent,
  ],
  templateUrl: './network.component.html',
  styleUrl: './network.component.scss'
})
export class NetworkComponent {

  protected readonly peers;

  constructor(
    private readonly peerService: PeerService,
  ) {
    this.peers = this.peerService.getPeers();
  }

  protected speed(speed: Speed[]): string {
    return speed.map(conn => {
      if (conn.amount > 1) {
        return `${conn.amount}x${conn.speed / 1000}\u2009Gbits`;
      } else {
        return `${conn.speed / 1000}\u2009Gbit`
      }
    }).join(' + ');
  }
}
