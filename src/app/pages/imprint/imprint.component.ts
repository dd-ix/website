import {Component, SecurityContext} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from "@angular/router";
import {TextBlocksService} from "../../api/text-blocks.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent {

  protected readonly imprint = this.textBlocksService.getTextBlock("imprint");

  constructor(
    private readonly textBlocksService: TextBlocksService,
    private readonly sanitizer: DomSanitizer,
  ) {
  }

  protected safeHtml(html: string): string | null {
    return this.sanitizer.sanitize(SecurityContext.HTML, html);
  }
}
