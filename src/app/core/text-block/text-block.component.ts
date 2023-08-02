import {Component, Input, SecurityContext} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TextBlocksService} from "../../api/text-blocks.service";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {BehaviorSubject, filter, switchMap} from "rxjs";

@Component({
  selector: 'app-text-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.scss']
})
export class TextBlockComponent {

  private readonly slug$ = new BehaviorSubject<string | undefined>(undefined);

  protected readonly block = this.slug$.pipe(
    filter(slug => !!slug),
    switchMap(slug => this.textBlocksService.getTextBlock(slug!))
  );

  @Input()
  set slug(value: string) {
    this.slug$.next(value);
  }

  constructor(
    private readonly textBlocksService: TextBlocksService,
    private readonly sanitizer: DomSanitizer,
  ) {
  }

  protected safeHtml(html: string | undefined): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.sanitizer.sanitize(SecurityContext.HTML, html ?? '') ?? '');
  }
}
