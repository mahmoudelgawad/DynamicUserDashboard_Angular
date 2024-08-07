import { Component, ElementRef, input, OnChanges, OnInit, SimpleChanges, viewChild } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { Store } from '@ngrx/store';
import { GlobalAppState } from '../models/global-app-state';
import { usersSelector } from '../store/users.selectors';
import { Observable } from 'rxjs';
import { User } from '../models/user-model';
import * as UsersActions from '../store/users.actions';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnChanges, OnInit{
users : User[] = [];
tempUsers? : User[];
currentPage = input.required<number>();
searchInput = viewChild.required<ElementRef<HTMLInputElement>>('searchInput');
  constructor(private store:Store<GlobalAppState>,private usersService : UsersService){
  }

  ngOnInit(): void {
    this.store.select(usersSelector).subscribe(u => this.users = u);
  }

ngOnChanges(changes: SimpleChanges): void {
  if(changes['currentPage']){
    this.tempUsers =undefined;
    this.searchInput().nativeElement.value="";
  }
}

  onSearchTextChange(event:any){
    if(!this.tempUsers){
      this.tempUsers = this.users;
    }
    let search:string = event.target.value;
    if(search){
      this.find(search);
    }else{
      this.dispatchsetFilterUsersAction(this.tempUsers);
      this.tempUsers = undefined;
    }
  }

  find(text:string){
     const result = this.tempUsers!.filter( u => u.id.toString() === text);
     this.dispatchsetFilterUsersAction(result);
  }

  dispatchsetFilterUsersAction(users:User[]){
    this.store.dispatch(UsersActions.setFilterUsersAction({value:users}));
  }

}
