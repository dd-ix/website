import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  public tooltip = '';
  public left = 0;
  public top = 0;
}
