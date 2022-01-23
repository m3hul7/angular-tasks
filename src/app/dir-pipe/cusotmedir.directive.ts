import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCusotmedir]'
})
export class CusotmedirDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = "red";
    el.nativeElement.style.color = "white";
  }

}
