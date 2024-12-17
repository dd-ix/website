import {Component} from '@angular/core';
import {IconSwitchComponent} from "../../../icons/icon-switch/icon-switch.component";
import {CardComponent} from "../../../core/card/card.component";
import {IconAntennaComponent} from "../../../icons/icon-antenna/icon-antenna.component";
import {IconDirectionsComponent} from "../../../icons/icon-directions/icon-directions.component";

@Component({
  selector: 'app-peering-explained',
  standalone: true,
  imports: [
    CardComponent,
    IconSwitchComponent,
    IconAntennaComponent,
    IconDirectionsComponent
  ],
  templateUrl: './peering-explained.component.html',
  styleUrl: './peering-explained.component.scss'
})
export class PeeringExplainedComponent {

}
