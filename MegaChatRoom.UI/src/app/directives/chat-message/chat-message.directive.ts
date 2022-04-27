import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[chatMessage]'
})
export class ChatMessageDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
