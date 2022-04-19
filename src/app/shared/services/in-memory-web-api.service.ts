import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InMemoryWebApiService implements InMemoryDbService{
  createDb(): {} | Observable<{}> | Promise<{}> {
    const users = [
      {login: 'string', nickname: 'string', password: 'string', cars: [{'sddsgd':'kdfhv'}, {'sddsgd':'kdfhv'}], admin: 'string', email: 'string'},
      {login: 'string', nickname: 'string', password: 'string', cars: [{'sddsgd':'kdfhv'}, {'sddsgd':'kdfhv'}], admin: 'string', email: 'string'},
      {login: 'string', nickname: 'string', password: 'string', cars: [{'sddsgd':'kdfhv'}, {'sddsgd':'kdfhv'}], admin: 'string', email: 'string'},
    ];
    const cars = [
      {},
      {}
    ];
    return {users, cars};
  }
}
