import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) 
  { 
 el.nativeElement.style.backgroundColor="orange"; // arkaplan rengini değiştir
  }

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight('blue');
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight('red');
  // }

  // private highlight(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }

  @HostListener('mouseenter') onMouseEnter() {
    this.makeInvisible();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.makeVisible();
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  makeInvisible(){
    this.el.nativeElement.style="visibility:hidden";
  }
  makeVisible(){
    this.el.nativeElement.style="visibility:visible";
  }

}
