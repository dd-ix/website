import { ChangeDetectionStrategy, Component, HostListener, Inject, LOCALE_ID, PLATFORM_ID, inject, DOCUMENT } from '@angular/core';
import { routingAnimation } from "./animation/routing.animation";
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { AsyncPipe, Location, PlatformLocation, isPlatformBrowser } from "@angular/common";
import { BehaviorSubject, delay, filter, map, take, tap } from "rxjs";
import { Meta, Title } from "@angular/platform-browser";
import { Language } from "./api/api.domain";
import { IconLogoComponent } from "./icons/icon-logo/icon-logo.component";
import { IconMenuComponent } from "./icons/icon-menu/icon-menu.component";
import { NotificationListComponent } from "@feel/notification";
import { ProgressBarComponent } from "./core/progress-bar/progress-bar.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [routingAnimation],
    imports: [
    AsyncPipe,
    RouterLink,
    IconLogoComponent,
    RouterLinkActive,
    IconMenuComponent,
    RouterOutlet,
    NotificationListComponent,
    ProgressBarComponent
]
})
export class AppComponent {

  protected disableNav = new BehaviorSubject(false);
  protected asideSown = new BehaviorSubject(false);
  protected enableAnimation = new BehaviorSubject(false);

  protected isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  protected readonly path = this.router.events.pipe(
    tap(event => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }

      const url = new URL(this.platformLocation.href);
      url.protocol = 'https:';
      url.search = '';

      this.meta.updateTag({ property: 'og:url', content: url.toString() });
      this.meta.updateTag({ name: 'twitter:url', content: url.toString() });
      this.updateCanonicalUrl(url.toString());
      this.updateAlternativeUrl(url.toString());
      this.updateCurrentAlternativeUrl(url.toString());
      this.updateXDefaultAlternativeUrl(url.toString());

      const title = this.route.firstChild?.snapshot?.data?.['title'] || this.route.root.firstChild?.snapshot?.data?.['title'];
      if (title) {
        this.title.setTitle($localize`${title} | Dresden Internet Exchange`);
        this.meta.updateTag({ property: 'og:title', content: $localize`${title} | Dresden Internet Exchange` });
        this.meta.updateTag({ name: 'twitter:title', content: $localize`${title} | Dresden Internet Exchange` });
      } else {
        this.title.setTitle($localize`Dresden Internet Exchange`);
        this.meta.updateTag({ property: 'og:title', content: $localize`Dresden Internet Exchange` });
        this.meta.updateTag({ name: 'twitter:title', content: $localize`Dresden Internet Exchange` });
      }

      const path = new URL("https://example.com" + event.url).pathname;
      this.disableNav.next(path === '/event/opening');
    }),
    map(() => this.location.path() || '/'),
  );

  constructor(
    private readonly location: Location,
    private readonly router: Router,
    private readonly title: Title,
    private readonly route: ActivatedRoute,
    private readonly meta: Meta,
    private readonly platformLocation: PlatformLocation,
    @Inject(DOCUMENT) private readonly dom: Document,
    @Inject(LOCALE_ID) private readonly locale: Language,
  ) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        take(1),
        delay(10)
      )
      .subscribe(() => this.enableAnimation.next(true));
  }

  public closeAside(): void {
    this.asideSown.next(false);
  }

  protected currentYear(): number {
    return new Date().getFullYear();
  }

  protected toggleAside(): void {
    this.asideSown.next(!this.asideSown.value);
  }

  @HostListener('document:keydown.escape')
  private onKeyPress(): void {
    this.asideSown.next(false);
  }

  private updateCanonicalUrl(url: string): void {
    const head = this.dom.getElementsByTagName('head')[0];
    let element: HTMLLinkElement | null = this.dom.querySelector(`link[rel='canonical']`) || null
    if (element == null) {
      element = this.dom.createElement('link') as HTMLLinkElement;
      head.appendChild(element);
    }
    element.setAttribute('rel', 'canonical')
    element.setAttribute('href', url);
  }

  private updateAlternativeUrl(url: string): void {
    const oldLang = this.locale;
    let newLang;
    switch (this.locale) {
      case Language.ENGLISH:
        newLang = Language.GERMAN;
        break;
      case Language.GERMAN:
        newLang = Language.ENGLISH;
        break;
    }

    const head = this.dom.getElementsByTagName('head')[0];
    let element: HTMLLinkElement | null = this.dom.querySelector(`link[rel='alternate'][hreflang='${newLang}']`) || null
    if (element == null) {
      element = this.dom.createElement('link') as HTMLLinkElement;
      head.appendChild(element);
    }
    element.setAttribute('rel', 'alternate')
    element.setAttribute('hreflang', newLang);
    element.setAttribute('href', url.replace(`/${oldLang}/`, `/${newLang}/`));
  }

  private updateCurrentAlternativeUrl(url: string): void {
    const head = this.dom.getElementsByTagName('head')[0];
    let element: HTMLLinkElement | null = this.dom.querySelector(`link[rel='alternate'][hreflang='${this.locale}']`) || null
    if (element == null) {
      element = this.dom.createElement('link') as HTMLLinkElement;
      head.appendChild(element);
    }
    element.setAttribute('rel', 'alternate')
    element.setAttribute('hreflang', this.locale);
    element.setAttribute('href', url);
  }

  private updateXDefaultAlternativeUrl(url: string): void {
    const head = this.dom.getElementsByTagName('head')[0];
    let element: HTMLLinkElement | null = this.dom.querySelector(`link[rel='alternate'][hreflang='x-default']`) || null
    if (element == null) {
      element = this.dom.createElement('link') as HTMLLinkElement;
      head.appendChild(element);
    }
    element.setAttribute('rel', 'alternate')
    element.setAttribute('hreflang', 'x-default');
    element.setAttribute('href', url.replace(`/${(this.locale)}/`, `/${(Language.ENGLISH)}/`));
  }
}
