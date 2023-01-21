import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective{
@Input('appHighlight') color: {enterColor: string, exitColor: string};

@HostBinding('style.backgroundColor') bgColor: string | null;;
  constructor(
    private _el: ElementRef
  ) { }


 @HostListener('mouseenter') onmouseenter(){
  this.highlight(this.color.enterColor);
 }

 @HostListener('mouseleave') onmouseleave(){
  this.highlight(this.color.exitColor);
 }

 private highlight(color: string | null){
  // if you are not using hostbinding 
  // this._el.nativeElement.style.backgroundColor = color;

  //if you are using hostbinding
  this.bgColor = color;
 }

}
