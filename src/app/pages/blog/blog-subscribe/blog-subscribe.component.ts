import {Component} from '@angular/core';
import {CardComponent} from "../../../core/card/card.component";
import {MailingListComponent} from "../../../core/mailing-list/mailing-list.component";

@Component({
  selector: 'app-blog-subscribe',
  templateUrl: './blog-subscribe.component.html',
  styleUrls: ['./blog-subscribe.component.scss'],
  standalone: true,
  imports: [
    CardComponent,
    MailingListComponent
  ]
})
export class BlogSubscribeComponent {

}
