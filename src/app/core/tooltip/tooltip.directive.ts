import {
  ApplicationRef,
  ComponentRef,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  HostListener,
  Injector,
  Input,
  OnDestroy,
  ViewContainerRef
} from '@angular/core';
import {TooltipComponent} from "./tooltip.component";

@Directive({
  selector: '[appTooltip]',
  standalone: true
})
export class TooltipDirective implements OnDestroy {

  @Input() appTooltip = '';

  private componentRef: ComponentRef<any> | null = null;

  constructor(
    private elementRef: ElementRef,
    private appRef: ApplicationRef,
    private viewContainerRef: ViewContainerRef,
    private injector: Injector
  ) {
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (this.componentRef === null) {
      this.componentRef = this.viewContainerRef.createComponent(TooltipComponent, {injector: this.injector});
      this.appRef.attachView(this.componentRef.hostView);
      const domElem =
        (this.componentRef.hostView as EmbeddedViewRef<any>)
          .rootNodes[0] as HTMLElement;
      document.body.appendChild(domElem);
      this.setTooltipComponentProperties();
    }
  }

  private setTooltipComponentProperties() {
    if (this.componentRef !== null) {
      this.componentRef.instance.tooltip = this.appTooltip;
      const {left, right, bottom} =
        this.elementRef.nativeElement.getBoundingClientRect();
      this.componentRef.instance.left = (right - left) / 2 + left;
      this.componentRef.instance.top = bottom;
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.destroy();
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  destroy(): void {
    if (this.componentRef !== null) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
}
