import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TooltipDirective} from "../../core/tooltip/tooltip.directive";

@Component({
  selector: 'app-icon-frauenkirche',
  standalone: true,
  imports: [CommonModule, TooltipDirective],
  templateUrl: './icon-frauenkirche.component.svg',
  styleUrls: ['../style.scss'],
})
export class IconFrauenkircheComponent {

}
