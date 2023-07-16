import {ChangeDetectionStrategy, Component, Inject, LOCALE_ID} from '@angular/core';
import {routingAnimation} from "./animation/routing.animation";
import {Language} from "./api/news.domain";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {map} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [routingAnimation],
})
export class AppComponent {

  protected readonly switchLanguage = this.router.events.pipe(
    map(() => {
      const {code, name} = this.lang === Language.GERMAN
        ? {code: Language.ENGLISH, name: "English"}
        : {code: Language.GERMAN, name: "Deutsch"};

      return {href: `/${code}/${this.location.path().substring(4)}`, name};
    })
  );

  constructor(
    @Inject(LOCALE_ID) private readonly lang: Language,
    private readonly location: Location,
    private readonly router: Router,
  ) {
  }

  protected currentYear(): number {
    return new Date().getFullYear();
  }
}
