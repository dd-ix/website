import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipDirective} from "../../core/tooltip/tooltip.directive";

@Component({
    selector: 'app-icon-rating',
    imports: [CommonModule, TooltipDirective],
    templateUrl: './icon-rating.component.svg',
    styleUrls: ['../style.scss']
})
export class IconRatingComponent {

}
