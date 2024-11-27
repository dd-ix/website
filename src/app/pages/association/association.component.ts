import {Component} from '@angular/core';
import {DocumentsService} from "../../api/documents.service";
import {Document} from "../../api/documents.domain";
import {API_URL} from "../../api/api.domain";
import {CardComponent} from "../../core/card/card.component";
import {IconSwitchComponent} from "../../icons/icon-switch/icon-switch.component";
import {IconTalkingComponent} from "../../icons/icon-talking/icon-talking.component";
import {IconSocialComponent} from "../../icons/icon-social/icon-social.component";
import {IconMoneyComponent} from "../../icons/icon-money/icon-money.component";
import {IconHubComponent} from "../../icons/icon-hub/icon-hub.component";
import {IconFrauenkircheComponent} from "../../icons/icon-frauenkirche/icon-frauenkirche.component";
import {AsyncPipe, NgForOf} from "@angular/common";

@Component({
    selector: 'app-association',
    templateUrl: './association.component.html',
    styleUrls: ['./association.component.scss'],
    imports: [
        CardComponent,
        IconSwitchComponent,
        IconTalkingComponent,
        IconSocialComponent,
        IconMoneyComponent,
        IconHubComponent,
        IconFrauenkircheComponent,
        AsyncPipe,
        NgForOf
    ]
})
export class AssociationComponent {

  protected readonly documents = this.documentsService.getDocuments();

  constructor(
    private readonly documentsService: DocumentsService,
  ) {
  }

  protected buildDownloadLink(document: Document): string {
    return new URL(`${API_URL}/documents/download/${document.filename}`).toString();
  }

  protected buildBackgroundImage(document: Document): string {
    return new URL(`${API_URL}/documents/download/${document.image}`).toString();
  }
}
