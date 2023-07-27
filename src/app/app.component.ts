import {ChangeDetectionStrategy, Component, HostListener, Inject, LOCALE_ID} from '@angular/core';
import {routingAnimation} from "./animation/routing.animation";
import {NavigationEnd, Router} from "@angular/router";
import {Location} from "@angular/common";
import {BehaviorSubject, delay, filter, map, take} from "rxjs";
import {Language} from "./api/api.domain";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [routingAnimation],
})
export class AppComponent {

  protected asideSown = new BehaviorSubject(false);
  protected enableAnimation = new BehaviorSubject(false);

  protected readonly switchLanguage = this.router.events.pipe(
    map(() => {
      const {code, name} = this.lang === Language.GERMAN
        ? {code: Language.ENGLISH, name: "English"}
        : {code: Language.GERMAN, name: "Deutsch"};

      return {href: `/${code}${this.location.path()}`, name};
    })
  );

  constructor(
    @Inject(LOCALE_ID) private readonly lang: Language,
    private readonly location: Location,
    private readonly router: Router,
  ) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        take(1),
        delay(10)
      )
      .subscribe(() => this.enableAnimation.next(true));
  }

  @HostListener('document:keydown.escape')
  private onKeyPress(): void {
    this.asideSown.next(false);
  }

  protected currentYear(): number {
    return new Date().getFullYear();
  }

  protected toggleAside(): void {
    this.asideSown.next(!this.asideSown.value);
  }

  public closeAside(): void {
    this.asideSown.next(false);
  }
}
