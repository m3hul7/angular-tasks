import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Department, UserDetails } from '../models/model';

@Injectable()
export class DataManipulationService {
  apiLink:String;
  getvalue = [];
  constructor(private httpService: HttpClient) {
    this.apiLink = environment.baseURL;
   }

    getData(): Observable<UserDetails[]> {
      return this.httpService.get<UserDetails[]>(`${this.apiLink}/posts`);
    }

    createUser(value: UserDetails ): Observable<UserDetails> {
      return this.httpService.post<UserDetails>(`${this.apiLink}/posts/`, value)
    }
    getDepartment(): Observable<Department[]> {
      return this.httpService.get<Department[]>(`${this.apiLink}/departments`)
    }

    deleteUser(id: number): Observable<UserDetails> {
      return this.httpService.delete<UserDetails>(`${this.apiLink}/posts/${id}`)
    }
    getId(id:number): Observable<UserDetails> {
      return this.httpService.get<UserDetails>(`${this.apiLink}/posts/${id}`)
    }
    updateUser(id:number, data:UserDetails): Observable<UserDetails> {
      return this.httpService.put<UserDetails>(`${this.apiLink}/posts/${id}`,data)
    }
}
