import {Component} from '@angular/core';
import {IconSwitchComponent} from "../../../icons/icon-switch/icon-switch.component";
import {CardComponent} from "../../../core/card/card.component";
import {IconAntennaComponent} from "../../../icons/icon-antenna/icon-antenna.component";
import {IconDirectionsComponent} from "../../../icons/icon-directions/icon-directions.component";
import {ButtonComponent} from "@feel/form";
import {IconSendComponent} from "../../../icons/icon-send/icon-send.component";
import {IconPopMapComponent} from "../../../icons/icon-pop-map/icon-pop-map.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-peering-explained',
  standalone: true,
  imports: [
    ButtonComponent,
    CardComponent,
    IconSendComponent,
    IconPopMapComponent,
    IconSwitchComponent,
    IconAntennaComponent,
    IconDirectionsComponent
  ],
  templateUrl: './peering-explained.component.html',
  styleUrl: './peering-explained.component.scss'
})
export class PeeringExplainedComponent {

}
