import {Component, Input} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {CardComponent} from "../card/card.component";
import {SmallEvent} from "../../api/blog.domain";
import {API_URL} from "../../api/api.domain";
import {RelativeTimePipe} from "../pipes/relative-time.pipe";

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule, CardComponent, DatePipe, RelativeTimePipe],
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent {

  @Input()
  public event: SmallEvent | undefined;

  protected currentTime: number = Date.now();

  protected parseDate(date: string): number {
    return Date.parse(date);
  }


  protected buildEventLink(slug: string): string {
    return `/event/${slug}`;
  }

  protected buildEventImageUrl(image: string | null): string | null {
    if (!image) {
      return null;
    }

    return new URL(`${API_URL}/event/assets/${image}`).toString();
  }

  protected readonly Date = Date;
}
