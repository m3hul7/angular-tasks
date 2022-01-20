import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  forInterpolation:string = 'HI THERE';
  imgURL:string = '../../assets/silhouette-manwithscythe-1900.svg';
  inputValue?:string;
  fromParentToChild:string = '';
  fromChildToParent:string = '';
  constructor() { }

  onClick() {
    alert("HEY YOU JUST CLICKED ME!!");
  }

  saveChildData(childData:string){
    this.fromChildToParent = childData;
  }
  saveParentToChild(value:string) {
    this.fromParentToChild = value;
  }

  ngOnInit(): void {
  }
  
  
}
