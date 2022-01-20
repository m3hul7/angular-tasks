import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  parentName: string = "i am parent";
  childData?:string;
  addItem(newItem: string) {
    this.childData = newItem;
  }
}
