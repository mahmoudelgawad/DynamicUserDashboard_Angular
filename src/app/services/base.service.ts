import { Injectable } from '@angular/core';
import { ResponseObject } from '../models/response-object-model';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  //reference URL
  //https://reqres.in/api/users?page=1
  baseURL:string = 'https://reqres.in/api';
  constructor(){}

}
