import { Component, computed, input, OnChanges, OnInit, output, Signal, signal, SimpleChanges } from '@angular/core';
import { User } from '../models/user-model';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit,OnChanges {

users = input.required<User[] | undefined>();
usersPerPage = input.required<number | undefined>();
totalUsers = input.required<number | undefined>();

onPageNumberSelected = output<number>();

totalPages = computed(() => this.totalUsers()! / this.usersPerPage()!);
totalPagesRender = computed(() => {
  let items = []
  for(let i=1; i<= this.totalPages(); i++){
    items.push(i);
  }
  return items;
});
selectedPageNumber = signal<number>(1);
constructor(private router:Router){
}

ngOnInit(): void {
}
ngOnChanges(changes: SimpleChanges): void {

}

onClickPageNumber(page:number){
 this.selectedPageNumber.set(page)
 this.onPageNumberSelected.emit(page);
}

onSelectedUser(user:User){
    this.router.navigate(["user-details"],{queryParams:{id:user.id}});
}

}
