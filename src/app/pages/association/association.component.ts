import {Component, SecurityContext} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentsService} from "../../api/documents.service";
import {Document} from "../../api/documents.domain";
import {API_DOMAIN} from "../../api/api.domain";
import {TextBlocksService} from "../../api/text-blocks.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-association',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.scss']
})
export class AssociationComponent {

  protected readonly ourMission = this.textBlocksService.getTextBlock("association.our-mission");
  protected readonly joinTheAssociation = this.textBlocksService.getTextBlock("association.join-the-association");

  protected readonly documents = this.documentsService.getDocuments();

  constructor(
    private readonly textBlocksService: TextBlocksService,
    private readonly documentsService: DocumentsService,
    private readonly sanitizer: DomSanitizer,
  ) {
  }

  protected buildDownloadLink(document: Document): string {
    return `${API_DOMAIN}/documents/download/${document.filename}`;
  }

  protected safeHtml(html: string): string | null {
    return this.sanitizer.sanitize(SecurityContext.HTML, html);
  }
}
