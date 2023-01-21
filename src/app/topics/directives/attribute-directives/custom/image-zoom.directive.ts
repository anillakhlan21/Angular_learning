import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appImageZoom]'
})
export class ImageZoomDirective implements OnInit, OnChanges{
  @Input('appImageZoom') zoomLevel: number = 100;
  constructor(private el: ElementRef) { }

ngOnInit(): void {
  // this.el.nativeElement.style.zoom = this.zoomLevel + '%';
}
ngOnChanges(changes: SimpleChanges): void {
  this.el.nativeElement.style.zoom = this.zoomLevel + '%';
}
}
