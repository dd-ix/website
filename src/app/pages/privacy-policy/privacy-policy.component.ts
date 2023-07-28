import {Component, SecurityContext} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TextBlocksService} from "../../api/text-blocks.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {

  protected readonly privacyPolicy = this.textBlocksService.getTextBlock("privacy-policy");

  constructor(
    private readonly textBlocksService: TextBlocksService,
    private readonly sanitizer: DomSanitizer,
  ) {
  }

  protected safeHtml(html: string): string | null {
    return this.sanitizer.sanitize(SecurityContext.HTML, html);
  }
}
