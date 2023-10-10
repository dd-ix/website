import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponent} from "../../../../core/card/card.component";

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {

}
