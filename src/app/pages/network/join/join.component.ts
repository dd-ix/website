import { Component } from '@angular/core';
import {ButtonComponent} from "@feel/form";
import {CardComponent} from "../../../core/card/card.component";
import {IconSendComponent} from "../../../icons/icon-send/icon-send.component";
import {IconPopMapComponent} from "../../../icons/icon-pop-map/icon-pop-map.component";

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [
    ButtonComponent,
    CardComponent,
    IconSendComponent,
    IconPopMapComponent
  ],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss'
})
export class JoinComponent {

}
