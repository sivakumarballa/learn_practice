import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() color: string;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = "transparent";
  }

  constructor(private el: ElementRef) {
    console.log("directive....");
    console.log(el);
    console.log(this.color);
  }

  ngOnInit() {
    console.log(this.color);
  }
}
