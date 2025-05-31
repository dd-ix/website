import {Component} from '@angular/core';

import {CardComponent} from "../../core/card/card.component";
import {TextBlockComponent} from "../../core/text-block/text-block.component";

@Component({
    selector: 'app-privacy-policy',
    imports: [CardComponent, TextBlockComponent],
    templateUrl: './privacy-policy.component.html',
    styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {
}
