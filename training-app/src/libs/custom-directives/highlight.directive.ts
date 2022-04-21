import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) 
  { 
 el.nativeElement.style.backgroundColor="orange"; // arkaplan rengini değiştir
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('blue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('red');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }



}
