import {Component} from '@angular/core';
import {CardComponent} from "../../../core/card/card.component";
import {MailingListComponent} from "../../../core/mailing-list/mailing-list.component";

@Component({
  selector: 'app-news-subscribe',
  templateUrl: './news-subscribe.component.html',
  styleUrls: ['./news-subscribe.component.scss'],
  standalone: true,
  imports: [
    CardComponent,
    MailingListComponent
  ]
})
export class NewsSubscribeComponent {

}
