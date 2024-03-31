import {Component} from '@angular/core';

import {PeerService} from "../../api/peer.service";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {CardComponent} from "../../core/card/card.component";
import {IconCheckmarkComponent} from "../../icons/icon-checkmark/icon-checkmark.component";
import {Speed} from "../../api/peer.domain";
import {IconCloseComponent} from "../../icons/icon-close/icon-close.component";

@Component({
  selector: 'app-network',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    NgIf,
    CardComponent,
    IconCheckmarkComponent,
    IconCloseComponent
  ],
  templateUrl: './network.component.html',
  styleUrl: './network.component.scss'
})
export class NetworkComponent {

  protected readonly peers = this.peerService.getPeers();

  constructor(
    private readonly peerService: PeerService,
  ) {
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
