import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentsService} from "../../api/documents.service";
import {Document} from "../../api/documents.domain";
import {API_URL} from "../../api/api.domain";
import {CardComponent} from "../../core/card/card.component";
import {TextBlockComponent} from "../../core/text-block/text-block.component";

@Component({
  selector: 'app-association',
  standalone: true,
  imports: [CommonModule, CardComponent, TextBlockComponent],
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
