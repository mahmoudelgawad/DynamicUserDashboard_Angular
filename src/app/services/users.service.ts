import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../models/user-model';
import { map, Observable } from 'rxjs';
import { BaseService } from './base.service';
import { ResponseObject } from '../models/response-object-model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersURL:string;

  constructor(private http:HttpClient, private baseService : BaseService) {
    this.usersURL = "/users";
   }

  getUsers(page:number):Observable<ResponseObject>{
    return this.baseService.get<ResponseObject>(this.usersURL+`?page=${page}`);
  }

}
