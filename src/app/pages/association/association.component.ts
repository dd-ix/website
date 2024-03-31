import {Component} from '@angular/core';
import {DocumentsService} from "../../api/documents.service";
import {Document} from "../../api/documents.domain";
import {API_URL} from "../../api/api.domain";

@Component({
  selector: 'app-association',
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
    return new URL(`${API_URL}/documents/download/${document.filename}`).toString();
  }

  protected buildBackgroundImage(document: Document): string {
    return new URL(`${API_URL}/documents/download/${document.image}`).toString();
  }
}
