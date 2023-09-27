import {ChangeDetectionStrategy, Component, HostListener} from '@angular/core';
import {routingAnimation} from "./animation/routing.animation";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Location, PlatformLocation} from "@angular/common";
import {BehaviorSubject, delay, filter, map, take} from "rxjs";
import {Meta, Title} from "@angular/platform-browser";

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

  protected readonly path = this.router.events.pipe(
    map(() => this.location.path() || '/'),
  );

  constructor(
    private readonly location: Location,
    private readonly router: Router,
    private readonly title: Title,
    private readonly route: ActivatedRoute,
    private readonly meta: Meta,
    private readonly platformLocation: PlatformLocation,
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const url = new URL(this.platformLocation.href);
        url.search = '';

        this.meta.updateTag({property: 'og:url', content: url.toString()});
        this.meta.updateTag({name: 'twitter:url', content: url.toString()});

        const title = this.route.firstChild?.snapshot?.data?.['title'] || this.route.root.firstChild?.snapshot?.data?.['title'];
        if (title) {
          this.title.setTitle($localize`${title} | Dresden Internet Exchange`);
          this.meta.updateTag({property: 'og:title', content: $localize`${title} | Dresden Internet Exchange`});
          this.meta.updateTag({name: 'twitter:title', content: $localize`${title} | Dresden Internet Exchange`});
        } else {
          this.title.setTitle($localize`Dresden Internet Exchange`);
          this.meta.updateTag({property: 'og:title', content: $localize`Dresden Internet Exchange`});
          this.meta.updateTag({name: 'twitter:title', content: $localize`Dresden Internet Exchange`});
        }
      });

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
