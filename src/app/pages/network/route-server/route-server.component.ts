import {Component} from '@angular/core';
import {BirdService} from "../../../api/bird.service";
import {AsyncPipe} from "@angular/common";
import {CardComponent} from "../../../core/card/card.component";

@Component({
  selector: 'app-route-server',
  imports: [
    AsyncPipe,
    CardComponent
  ],
  templateUrl: './route-server.component.html',
  styleUrl: './route-server.component.scss'
})
export class RouteServerComponent {

  protected readonly bird;

  constructor(
    private readonly birdService: BirdService,
  ) {
    this.bird = this.birdService.getBird();
  }
}
