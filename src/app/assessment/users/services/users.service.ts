import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { clients, offices, users } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  showForm?: boolean;
  apiLink:string = ''
  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL
  }
  public change: EventEmitter<any> = new EventEmitter();
  public edit: EventEmitter<any> = new EventEmitter();

  public setData(value: boolean) {
    this.change.emit(value);
  }
  public setID(value: number) {
    console.log(value)
    this.edit.emit(value);
  }
  getClients(): Observable<clients[]> {
    return this.http.get<clients[]>(`${this.apiLink}/clients`)
  }
  getOffices(): Observable<offices[]> {
    return this.http.get<offices[]>(`${this.apiLink}/offices`)
  }
  getUsers(): Observable<users[]> {
    return this.http.get<users[]>(`${this.apiLink}/users`)
  }
  saveUser(value: users): Observable<users> {
    return this.http.post<users>(`${this.apiLink}/users/`, value)
  }
  deleteUser(id: number): Observable<users> {
    return this.http.delete<users>(`${this.apiLink}/users/${id}`)
  }
  updateUser(id:number, data:users): Observable<users> {
    return this.http.put<users>(`${this.apiLink}/users/${id}`,data)
  }
  getId(id:number): Observable<users> {
    return this.http.get<users>(`${this.apiLink}/users/${id}`)
  }
}
