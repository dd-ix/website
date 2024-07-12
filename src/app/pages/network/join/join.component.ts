import { Component } from '@angular/core';
import {ButtonComponent} from "@feel/form";
import {CardComponent} from "../../../core/card/card.component";
import {IconSendComponent} from "../../../icons/icon-send/icon-send.component";
import {IconPopMapComponent} from "../../../icons/icon-pop-map/icon-pop-map.component";
import {API_URL} from "../../../api/api.domain";
import {Document} from "../../../api/documents.domain";

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [
    ButtonComponent,
    CardComponent,
    IconSendComponent,
    IconPopMapComponent
  ],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss'
})
export class JoinComponent {

  protected readonly API_URL = API_URL;


  protected buildDownloadLinkTermsOfService(): string {
    return new URL(`${API_URL}/documents/download/DD-IX TermsofService.pdf`).toString();
  }

  protected buildBackgroundImageTermsofService(): string {
    return new URL(`${API_URL}/documents/download/DD-IX TermsofService.webp`).toString();
  }
}
