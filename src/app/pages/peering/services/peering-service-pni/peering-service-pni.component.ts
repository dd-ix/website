import {Component, SecurityContext} from '@angular/core';
import {TextBlocksService} from "../../../../api/text-blocks.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-peering-service-pni',
  templateUrl: './peering-service-pni.component.html',
  styleUrls: ['./peering-service-pni.component.scss']
})
export class PeeringServicePniComponent {

  protected readonly pni = this.textBlocksService.getTextBlock("peering.service-pni");

  constructor(
    private readonly textBlocksService: TextBlocksService,
    private readonly sanitizer: DomSanitizer,
  ) {
  }

  protected safeHtml(html: string): string | null {
    return this.sanitizer.sanitize(SecurityContext.HTML, html);
  }
}
