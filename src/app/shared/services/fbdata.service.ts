import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {fbCreateResponse, User} from "../interfaces";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FbdataService {

  constructor(private http: HttpClient) { }

  create(user: string): Observable<User>{
    console.log(user);
    return this.http.post<User>(`${environment.fbDbUrl}users.json`, user)
      .pipe(map((response : any) => {
        console.log(response)
        return {
        // @ts-ignore
          ...user
        }
      }))
  }

  getById(id: string): Observable<User>{
    return this.http.get<User>(`${environment.fbDbUrl}users/${id}.json`)
      .pipe(map((user: User) => {
        return {
          ...user,
        }
      }))
  }

  getAll(){
    return this.http.get(`${environment.fbDbUrl}users.json`);
  }

  update(id: string): Observable<User>{
    return this.http.patch<User>(`${environment.fbDbUrl}posts/${id}.json`, id)
  }

}
