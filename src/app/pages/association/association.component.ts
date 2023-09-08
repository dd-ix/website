import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentsService} from "../../api/documents.service";
import {Document} from "../../api/documents.domain";
import {API_URL} from "../../api/api.domain";
import {CardComponent} from "../../core/card/card.component";
import {TextBlockComponent} from "../../core/text-block/text-block.component";
import {IconTalkingComponent} from "../../icons/icon-talking/icon-talking.component";
import {IconSwitchComponent} from "../../icons/icon-switch/icon-switch.component";
import {IconSocialComponent} from "../../icons/icon-social/icon-social.component";
import {IconHubComponent} from "../../icons/icon-hub/icon-hub.component";
import {IconGlobeComponent} from "../../icons/icon-globe/icon-globe.component";
import {IconFrauenkircheComponent} from "../../icons/icon-frauenkirche/icon-frauenkirche.component";
import {IconGroupComponent} from "../../icons/icon-group/icon-group.component";

@Component({
  selector: 'app-association',
  standalone: true,
  imports: [CommonModule, CardComponent, TextBlockComponent, IconTalkingComponent, IconSwitchComponent, IconSocialComponent, IconHubComponent, IconGlobeComponent, IconFrauenkircheComponent, IconGroupComponent],
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.scss']
})
export class AssociationComponent {

  protected readonly documents = this.documentsService.getDocuments();

  constructor(
    private readonly documentsService: DocumentsService,
  ) {
  }

  protected buildDownloadLink(document: Document): string {
    return `${API_URL}/documents/download/${document.filename}`;
  }

  protected buildBackgroundImage(document: Document):string {
    return `${API_URL}/documents/download/${document.image}`;
  }
}
