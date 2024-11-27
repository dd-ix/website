import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipDirective} from "../../core/tooltip/tooltip.directive";

@Component({
    selector: 'app-icon-internet',
    imports: [CommonModule, TooltipDirective],
    templateUrl: './icon-internet.component.svg',
    styleUrls: ['../style.scss']
})
export class IconInternetComponent {

}
