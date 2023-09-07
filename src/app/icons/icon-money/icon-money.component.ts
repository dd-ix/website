import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TooltipDirective} from "../../core/tooltip/tooltip.directive";

@Component({
  selector: 'app-icon-money',
  standalone: true,
  imports: [CommonModule, TooltipDirective],
  templateUrl: './icon-money.component.svg',
  styleUrls: ['../style.scss']
})
export class IconMoneyComponent {

}
