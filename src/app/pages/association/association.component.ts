import {Component} from '@angular/core';
import {DocumentsService} from "../../api/documents.service";
import {Document} from "../../api/documents.domain";
import {API_URL} from "../../api/api.domain";
import {CardComponent} from "../../core/card/card.component";
import {IconSwitchComponent} from "../../icons/icon-switch/icon-switch.component";
import {IconTalkingComponent} from "../../icons/icon-talking/icon-talking.component";
import {IconSocialComponent} from "../../icons/icon-social/icon-social.component";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.scss'],
  imports: [
    CardComponent,
    IconSwitchComponent,
    IconTalkingComponent,
    IconSocialComponent,
    AsyncPipe
  ]
})
export class AssociationComponent {

  protected readonly documents;

  constructor(
    private readonly documentsService: DocumentsService,
  ) {
    this.documents = this.documentsService.getDocuments();
  }

  protected buildDownloadLink(document: Document): string {
    return new URL(`${API_URL}/documents/download/${document.filename}`).toString();
  }

  protected buildBackgroundImage(document: Document): string {
    return new URL(`${API_URL}/documents/download/${document.image}`).toString();
  }
}
