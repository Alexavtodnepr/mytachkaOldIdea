import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, Subject, tap} from "rxjs";
import {AuthUser, FbAuthResponse} from "../interfaces";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public error$: Subject<string> = new Subject<string>();
  constructor(private http: HttpClient, private router: Router) { }
    get token(): string | null{
    // @ts-ignore
      const expDate = new Date(localStorage.getItem('fb-token-exp'))
      if (new Date() > expDate){
        this.logout();
        return null;
      }
      return localStorage.getItem('fb-token');
    }
  login(user: AuthUser): Observable<any>{
    user.returnSecureToken = true;
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        // @ts-ignore
        tap(this.setToken),
        // @ts-ignore
        catchError(this.handleError.bind(this))
      )
  }
  getText(){
    // let  = '';
    return this.http.get<any>('https://www.avtoboss.com.ua/mrkoote.php?gr=НП18-2/9' )
  }

  logout() {
    this.router.navigate(['login'])
    this.setToken(null);
  }

  isAuthenticated(): boolean{
    return !!this.token;
  }

  private handleError(error: HttpErrorResponse) {
    const {message} = error.error.error;
    switch (message) {
      case 'INVALID_ID_EMAIL':
        this.error$.next('This email is wrong!');
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('This password is wrong!');
        break
      case 'EMAIL_NOT_FOUND':
        this.error$.next('This email is not registered!')
        break
    }
  }

  private setToken(response:FbAuthResponse | null ){
    if (response){
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
      localStorage.setItem('fb-token', response.idToken);
      localStorage.setItem('fb-token-exp', expDate.toString())
    } else {
      localStorage.clear();
    }

  }
}
// const firebaseConfig = {
//   apiKey: "AIzaSyCQp1E360h9Kxjk-WsZJ7Dbr7slk4KY9eI",
//   authDomain: "mytachka-ua.firebaseapp.com",
//   projectId: "mytachka-ua",
//   storageBucket: "mytachka-ua.appspot.com",
//   messagingSenderId: "569157894914",
//   appId: "1:569157894914:web:fcf29238b2a843f654b81b",
//   measurementId: "G-WZ4FVMB84T"
// };
