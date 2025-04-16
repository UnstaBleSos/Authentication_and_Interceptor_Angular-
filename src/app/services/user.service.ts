import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiurl = "https://reqres.in/api/users"

  constructor(private http:HttpClient) { }

  fetchData(userId: number):Observable<any>{
    return this.http.get(`${this.apiurl}?${userId}`)
  }
}
