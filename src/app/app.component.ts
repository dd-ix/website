import {ChangeDetectionStrategy, Component, HostListener, Inject, LOCALE_ID} from '@angular/core';
import {routingAnimation} from "./animation/routing.animation";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {DOCUMENT, Location, PlatformLocation} from "@angular/common";
import {BehaviorSubject, delay, filter, map, take} from "rxjs";
import {Meta, Title} from "@angular/platform-browser";
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
    @Inject(DOCUMENT) private readonly dom: Document,
    @Inject(LOCALE_ID) private readonly locale: Language,
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const url = new URL(this.platformLocation.href);
        url.protocol = 'https:';
        url.search = '';

        this.meta.updateTag({property: 'og:url', content: url.toString()});
        this.meta.updateTag({name: 'twitter:url', content: url.toString()});
        this.updateCanonicalUrl(url.toString());
        this.updateAlternativeUrl(url.toString());
        this.updateCurrentAlternativeUrl(url.toString());
        this.updateXDefaultAlternativeUrl(url.toString());

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
