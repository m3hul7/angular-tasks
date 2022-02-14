import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { clients, users } from '../../models/users.model';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{

  users: users[] = []
  length?: number
  clients: clients[] = []
  showForm: boolean = false

  constructor(private userService: UsersService) {
    this.userService.change.subscribe((value) => { this.showForm = value, this.getUsersData() }) 
  }

  ngOnInit(): void {
    this.getUsersData()
    this.getClientsOptions()
  }
 

  getUsersData() {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data
        this.length = data.length
      }
    )
  }
  getClientsOptions() {
    this.userService.getClients().subscribe(
      (options) => {
        this.clients = options
      }
    )
  }
  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe ( 
      () => {
        console.log("deleted")
      }
    );
    this.getUsersData()
  }

  edit(id:number) {
    this.showForm = true
    setTimeout(()=> {
      this.userService.setID(id);},1000)
    // this.userService.setID(id);
  }

  onClickNewUser(){
    this.showForm = true
  }

}
