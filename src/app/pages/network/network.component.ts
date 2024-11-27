import {Component} from '@angular/core';

import {PeerService} from "../../api/peer.service";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {CardComponent} from "../../core/card/card.component";
import {IconCheckmarkComponent} from "../../icons/icon-checkmark/icon-checkmark.component";
import {Speed} from "../../api/peer.domain";
import {IconCloseComponent} from "../../icons/icon-close/icon-close.component";
import {ButtonComponent} from "@feel/form";
import {IconSendComponent} from "../../icons/icon-send/icon-send.component";
import {RouterLink} from "@angular/router";
import {IconPopMapComponent} from "../../icons/icon-pop-map/icon-pop-map.component";

@Component({
    selector: 'app-network',
    imports: [
        AsyncPipe,
        NgForOf,
        NgIf,
        CardComponent,
        IconCheckmarkComponent,
        IconCloseComponent,
        ButtonComponent,
        IconSendComponent,
        RouterLink,
        IconPopMapComponent
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
