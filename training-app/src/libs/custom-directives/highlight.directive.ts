import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() highlightColor :string= '';

  constructor(private el:ElementRef) 
  { 
  // el.nativeElement.style.backgroundColor="orange"; 
  }

 @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor=this.highlightColor;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor=this.highlightColor;
  }

  // 

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight('blue');
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight('red');
  // }

  // private highlight(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }

  // makeInvisible()***************

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.makeInvisible();
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.makeVisible();
  // }

  // private highlight(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }
  // makeInvisible(){
  //   this.el.nativeElement.style="visibility:hidden";
  // }
  // makeVisible(){
  //   this.el.nativeElement.style="visibility:visible";
  // }


  //makeBigger()**********
  
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.makeBigger();
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.makeSmaller();
  // }

  // private highlight(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }
  // makeBigger(){
  //   this.el.nativeElement.style="font-size:2rem";
  // }
  // makeSmaller(){
  //   this.el.nativeElement.style="fony-size:0.8rem"
  // }





}
