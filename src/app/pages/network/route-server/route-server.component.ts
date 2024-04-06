import {Component} from '@angular/core';
import {BirdService} from "../../../api/bird.service";
import {AsyncPipe} from "@angular/common";
import {CardComponent} from "../../../core/card/card.component";

@Component({
  selector: 'app-route-server',
  standalone: true,
  imports: [
    AsyncPipe,
    CardComponent
  ],
  templateUrl: './route-server.component.html',
  styleUrl: './route-server.component.scss'
})
export class RouteServerComponent {

  protected readonly bird = this.birdService.getBird();

  constructor(
    private readonly birdService: BirdService,
  ) {
  }
}
