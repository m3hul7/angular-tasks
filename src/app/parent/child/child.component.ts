import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  @Input() childName?:string;
 
  @Output() newEventEmitter:EventEmitter<string> = new EventEmitter<string>();

  toParent(toParentData: string) {
    this.newEventEmitter.emit(toParentData);
  }
  
}
