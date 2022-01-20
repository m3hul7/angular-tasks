import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  toParentData:string = "hi there im in child";
  ngOnInit(): void {
  }
  @Input() childName?:string;
 
  @Output() newEventEmitter = new EventEmitter<string>();

  toParent() {
    this.newEventEmitter.emit(this.toParentData);
  }
  
}
