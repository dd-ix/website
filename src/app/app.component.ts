import {ChangeDetectionStrategy, Component} from '@angular/core';
import {routingAnimation} from "./animation/routing.animation";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [routingAnimation],
})
export class AppComponent {

  protected currentYear(): number {
    return new Date().getFullYear();
  }
}
