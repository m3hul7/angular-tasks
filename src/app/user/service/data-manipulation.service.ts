import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserDetails } from '../models/model';

@Injectable()
export class DataManipulationService {
  apiLink:String;
  getvalue = [];
  constructor(private httpService: HttpClient) {
    this.apiLink = environment.baseURL;
   }

    getData(): Observable<any> {
      return this.httpService.get(`${this.apiLink}/posts`);
    }
    createUser(value: UserDetails ): Observable<UserDetails> {
      
      return this.httpService.post<UserDetails>(`${this.apiLink}/posts`,value)
    }
}
