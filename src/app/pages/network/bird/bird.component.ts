import {Component} from '@angular/core';
import {BirdService} from "../../../api/bird.service";
import {AsyncPipe} from "@angular/common";
import {CardComponent} from "../../../core/card/card.component";

@Component({
  selector: 'app-bird',
  standalone: true,
  imports: [
    AsyncPipe,
    CardComponent
  ],
  templateUrl: './bird.component.html',
  styleUrl: './bird.component.scss'
})
export class BirdComponent {

  protected readonly bird = this.birdService.getBird();

  constructor(
    private readonly birdService: BirdService,
  ) {
  }
}
