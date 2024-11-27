import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipDirective} from "../../core/tooltip/tooltip.directive";

@Component({
    selector: 'app-icon-switch',
    imports: [CommonModule, TooltipDirective],
    templateUrl: './icon-switch.component.svg',
    styleUrls: ['../style.scss']
})
export class IconSwitchComponent {

}
