import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentsService} from "../../api/documents.service";
import {Document} from "../../api/documents.domain";
import {API_DOMAIN} from "../../api/api.domain";

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent {

  protected readonly documents = this.documentsService.getDocuments();

  constructor(
    private readonly documentsService: DocumentsService
  ) {
  }

  protected buildDownloadLink(document: Document): string {
    return `${API_DOMAIN}/documents/download/${document.filename}`;
  }

}
