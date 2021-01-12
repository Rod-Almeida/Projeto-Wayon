import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserListService {

userListURL = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) { }

  createList (){
return this.http.get<any[]>(this.userListURL)
  }
}
