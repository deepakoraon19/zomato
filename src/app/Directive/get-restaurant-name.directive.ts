import {
  AfterViewInit,
  Directive,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appGetRestaurantName]',
  standalone: true,
})
export class GetRestaurantNameDirective implements AfterViewInit {
  constructor(private elemRef: ElementRef, private renderer: Renderer2) {}
  ngAfterViewInit() {
    const text = this.elemRef.nativeElement.textContent;
    this.renderer.setProperty(
      this.elemRef.nativeElement,
      'textContent',
      text.includes('(') ? text.substring(0, text.indexOf('(')) : text
    );
  }
}
