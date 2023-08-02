import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from "../../core/card/card.component";
import {TextBlockComponent} from "../../core/text-block/text-block.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, CardComponent, TextBlockComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
}
