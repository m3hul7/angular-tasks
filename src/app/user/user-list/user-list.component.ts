import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataManipulationService } from '../service/data-manipulation.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {



  constructor(private myService: DataManipulationService) { }

  ngOnInit(): void {

    
  }
  getDaata() {
    this.myService.getData().subscribe(data =>{
      console.log(data);
    } )
  }
}
