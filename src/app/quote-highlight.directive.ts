import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appQuoteHighlight]'
})
export class QuoteHighlightDirective {

  constructor(private elem:ElementRef) {
    elem.nativeElement.style.color ="white";
    elem.nativeElement.style.border = "2px"
   }

}
