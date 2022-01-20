import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() toChild?:string;
  @Output() newEventEmitter = new EventEmitter<string>();

  eventBind(frominputvalue:string) {
    this.newEventEmitter.emit(frominputvalue);
  }
  
  ngOnInit(): void {
  }

}
