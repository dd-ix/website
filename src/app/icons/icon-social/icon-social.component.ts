import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipDirective} from "../../core/tooltip/tooltip.directive";

@Component({
    selector: 'app-icon-social',
    imports: [CommonModule, TooltipDirective],
    templateUrl: './icon-social.component.svg',
    styleUrls: ['../style.scss']
})
export class IconSocialComponent {

}
