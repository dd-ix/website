import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {CardComponent} from "../../core/card/card.component";
import {IconMailComponent} from "../../icons/icon-mail/icon-mail.component";
import {IconPhoneComponent} from "../../icons/icon-phone/icon-phone.component";

@Component({
    selector: 'app-contact',
    imports: [CommonModule, CardComponent, IconMailComponent, IconPhoneComponent, NgOptimizedImage],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
}
