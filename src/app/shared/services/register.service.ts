import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {AuthUser} from "../interfaces";
import {environment} from "../../../environments/environment";
import {catchError, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  public error$: Subject<string> = new Subject<string>();
  constructor(private http: HttpClient) { }

  register(user: AuthUser){
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.apiKey}`, user)
      .pipe(
    // @ts-ignore
        catchError(this.handleError.bind(this)))
  }

  handleError(error: HttpErrorResponse){
    const {message} = error.error.error;
    switch (message) {
      case 'EMAIL_EXISTS':
        this.error$.next('This email is used other user!');
        console.log('This email is used other user!')
        break;
    }
  }
}
