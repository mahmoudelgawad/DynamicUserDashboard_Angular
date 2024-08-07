import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { UsersListComponent } from "../users-list/users-list.component";
import { UserDetailsComponent } from "../user-details/user-details.component";
import { Store } from '@ngrx/store';
import * as UsersActions from '../store/users.actions';
import {Observable } from 'rxjs';
import { UsersState } from '../models/users-state.model';
import { UsersService } from '../services/users.service';
import { selectUsersState } from '../store/users.selectors';
import { GlobalAppState } from '../models/global-app-state';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, UsersListComponent, UserDetailsComponent, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit  {
 currentPage:number = 0;
  usersState$: Observable<UsersState> = this.store.select(selectUsersState);
  constructor(private store:Store<GlobalAppState>,private usersService:UsersService){
  }
  ngOnInit(): void {
    this.loadUsers(1);
  }
  
  loadUsers(page:number){
    this.usersService.getUsers(page).subscribe(res => {
      this.store.dispatch(UsersActions.setUsersAction({value: res}));
    });
  }
  
  onPageSelected(page:number){
    this.loadUsers(page);
    this.currentPage = page;
  }
}
