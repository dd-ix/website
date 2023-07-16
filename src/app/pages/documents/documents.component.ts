import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentsService} from "../../api/documents.service";

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
}
