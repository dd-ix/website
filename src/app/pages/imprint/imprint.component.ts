import {Component} from '@angular/core';

import {CardComponent} from "../../core/card/card.component";
import {TextBlockComponent} from "../../core/text-block/text-block.component";

@Component({
    selector: 'app-imprint',
    imports: [CardComponent, TextBlockComponent],
    templateUrl: './imprint.component.html',
    styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent {
}
