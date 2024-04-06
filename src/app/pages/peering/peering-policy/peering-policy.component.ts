import {Component} from '@angular/core';
import {CardComponent} from "../../../core/card/card.component";
import {TextBlockComponent} from "../../../core/text-block/text-block.component";

@Component({
  selector: 'app-peering-policy',
  templateUrl: './peering-policy.component.html',
  styleUrls: ['./peering-policy.component.scss'],
  standalone: true,
  imports: [
    CardComponent,
    TextBlockComponent
  ]
})
export class PeeringPolicyComponent {
}
