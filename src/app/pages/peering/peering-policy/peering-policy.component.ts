import {Component, SecurityContext} from '@angular/core';
import {TextBlocksService} from "../../../api/text-blocks.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-peering-policy',
  templateUrl: './peering-policy.component.html',
  styleUrls: ['./peering-policy.component.scss']
})
export class PeeringPolicyComponent {

  protected readonly policy = this.textBlocksService.getTextBlock("peering.policy");

  constructor(
    private readonly textBlocksService: TextBlocksService,
    private readonly sanitizer: DomSanitizer,
  ) {
  }

  protected safeHtml(html: string): string | null {
    return this.sanitizer.sanitize(SecurityContext.HTML, html);
  }
}
