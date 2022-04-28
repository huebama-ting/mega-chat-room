import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[scroll]'
})
export class ScrollDirective {
  constructor(private elementRef: ElementRef<HTMLElement>) { }

  scrollToBottom(): void {
    this.elementRef.nativeElement.scroll({
      top: this.elementRef.nativeElement.scrollHeight,
      behavior: 'smooth'
    });
  }
}
