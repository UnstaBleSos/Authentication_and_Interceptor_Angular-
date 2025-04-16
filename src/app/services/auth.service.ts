  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';
  @Injectable({
    providedIn: 'root'
  })
  export class AuthService {

    url:string="https://reqres.in/api/login"
    constructor(private http:HttpClient) { }

    login(email:string, password:string):Observable<any>{
      console.log(email)
      console.log(password)
      return this.http.post(this.url,{email,password})
    }
  }
