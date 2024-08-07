import { Injectable, Type } from '@angular/core';
import { ResponseObject } from '../models/response-object-model';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { setUsersLoadingStatusAction } from '../store/users.actions';
import { Observable, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  //reference URL
  //https://reqres.in/api/users?page=1
  baseURL:string = 'https://reqres.in/api';
  constructor(private http:HttpClient,private store:Store){}

  get<T>(URL:string):Observable<T>{
    this.store.dispatch(setUsersLoadingStatusAction({value:true}));
    return this.http.get<T>(this.baseURL+URL)
           .pipe(tap(() => this.store.dispatch(setUsersLoadingStatusAction({value:false}))));
  }

}
