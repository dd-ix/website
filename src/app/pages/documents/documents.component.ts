import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentsService} from "../../api/documents.service";
import {Document} from "../../api/documents.domain";

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

  getDownloadLink(document: Document): string {
    return `http://127.0.0.1:8080/documents/download/${document.filename}`;
  }

}
