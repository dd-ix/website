import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MirrorService } from '../../../api/mirror.service';
import { AsyncPipe } from '@angular/common';
import { CardComponent } from '../../../core/card/card.component';

@Component({
  selector: 'app-mirror',
  imports: [AsyncPipe, CardComponent],
  templateUrl: './mirror.component.html',
  styleUrl: './mirror.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MirrorComponent {

  protected readonly mirrors;

  constructor(
    private readonly mirrorService: MirrorService
  ) {
    this.mirrors = this.mirrorService.getMirrors();
  }
}
