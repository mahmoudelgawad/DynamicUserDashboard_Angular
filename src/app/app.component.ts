import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UsersListComponent } from "./users-list/users-list.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import {  select, Store } from '@ngrx/store';
import * as UsersActions from './store/users.actions';
import { filter, map, Observable } from 'rxjs';
import { UsersState } from './models/users-state.model';
import { AsyncPipe } from '@angular/common';
import { UsersService } from './services/users.service';
import { User } from './models/user-model';
import { selectUsersState } from './store/users.selectors';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UsersListComponent, UserDetailsComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
usersState$: Observable<UsersState> = this.store.select(selectUsersState);
// users$: Observable<User[]> ;
// isLoading$: Observable<boolean> ;
// usersPerPage$: Observable<number> ;
// totalUsers$ :Observable<number>;
constructor(private store:Store<{usersState:UsersState}>,private usersService:UsersService){
}
ngOnInit(): void {
  this.loadUsers(1);
}

loadUsers(page:number){
  this.store.dispatch(UsersActions.setUsersLoadingAction({value:true}));
  this.usersService.getUsers(page).subscribe(res => {
    this.store.dispatch(UsersActions.setUsersLoadingAction({value:false}));
    this.store.dispatch(UsersActions.setUsersAction({value: res}));
  });
 
}

onPageSelected(page:number){
  this.loadUsers(page);
}

}
