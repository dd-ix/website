import {Component} from '@angular/core';
import {IconSwitchComponent} from "../../../icons/icon-switch/icon-switch.component";
import {CardComponent} from "../../../core/card/card.component";
import {IconAntennaComponent} from "../../../icons/icon-antenna/icon-antenna.component";
import {IconDirectionsComponent} from "../../../icons/icon-directions/icon-directions.component";
import {ButtonComponent} from "@feel/form";
import {IconSendComponent} from "../../../icons/icon-send/icon-send.component";
import {IconPopMapComponent} from "../../../icons/icon-pop-map/icon-pop-map.component";

@Component({
  selector: 'app-peering-landingpage',
  templateUrl: './peering-landingpage.component.html',
  styleUrls: ['./peering-landingpage.component.scss'],
  standalone: true,
  imports: [
    IconSwitchComponent,
    CardComponent,
    IconAntennaComponent,
    IconDirectionsComponent,
    ButtonComponent,
    IconSendComponent,
    IconPopMapComponent
  ]
})
export class PeeringLandingpageComponent {
}
