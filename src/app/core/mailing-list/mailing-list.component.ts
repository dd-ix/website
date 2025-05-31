import { Component, Input } from '@angular/core';

import { ButtonComponent } from "@feel/form";
import { IconSendComponent } from "../../icons/icon-send/icon-send.component";

@Component({
    selector: 'app-mailing-list',
    templateUrl: './mailing-list.component.html',
    styleUrls: ['./mailing-list.component.scss'],
    imports: [
    ButtonComponent,
    IconSendComponent
]
})
export class MailingListComponent {

  @Input()
  public listName: string | null = null;
  @Input()
  public listId: string | null = null;

  protected buildLink(listId: string): string {
    return `https://lists.dd-ix.net/postorius/lists/${listId}.lists.dd-ix.net/`;
  }
}
