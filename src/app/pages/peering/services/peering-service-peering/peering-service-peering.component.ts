import {Component, SecurityContext} from '@angular/core';
import {TextBlocksService} from "../../../../api/text-blocks.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-peering-service-peering',
  templateUrl: './peering-service-peering.component.html',
  styleUrls: ['./peering-service-peering.component.scss']
})
export class PeeringServicePeeringComponent {

  protected readonly peering = this.textBlocksService.getTextBlock("peering.service-peering");

  constructor(
    private readonly textBlocksService: TextBlocksService,
    private readonly sanitizer: DomSanitizer,
  ) {
  }

  protected safeHtml(html: string): string | null {
    return this.sanitizer.sanitize(SecurityContext.HTML, html);
  }
}
