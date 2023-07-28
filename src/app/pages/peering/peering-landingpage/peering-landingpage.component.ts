import {Component, SecurityContext} from '@angular/core';
import {TextBlocksService} from "../../../api/text-blocks.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-peering-landingpage',
  templateUrl: './peering-landingpage.component.html',
  styleUrls: ['./peering-landingpage.component.scss']
})
export class PeeringLandingpageComponent {

  protected readonly introduction = this.textBlocksService.getTextBlock("peering.introduction");

  constructor(
    private readonly textBlocksService: TextBlocksService,
    private readonly sanitizer: DomSanitizer,
  ) {
  }

  protected safeHtml(html: string): string | null {
    return this.sanitizer.sanitize(SecurityContext.HTML, html);
  }
}
