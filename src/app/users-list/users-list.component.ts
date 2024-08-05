import { Component, computed, input, OnChanges, OnInit, output, Signal, signal, SimpleChanges } from '@angular/core';
import { User } from '../models/user-model';

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
constructor(){
}

ngOnInit(): void {
  // console.log({
  //   from:'ngOnInit',
  //   SignaltotalPages:this.totalUsers(),
  //   SignalusersPerPage : this.usersPerPage()
  // });
  
}
ngOnChanges(changes: SimpleChanges): void {
  if(changes['usersPerPage'] && changes['totalUsers']){
  //  this.totalPagesRender = [];
  // this.totalPages.set(computed(() => this.totalUsers() / this.usersPerPage())());
  // for(let i=0; i < this.totalPages(); i++){
  //    this.totalPagesRender.push(i);
  // }

  // console.log({
  //   from:'ngOnChanges',
  //   SignaltotalUsers:this.totalUsers(),
  //   SignalusersPerPage : this.usersPerPage(),
  //   SignaltotalPages : this.totalPages(),
  //   totalPagesRender : this.totalPagesRender(),
  //   changes: changes
  // });
  }

}

onClickPageNumber(page:number){
 this.selectedPageNumber.set(page)
 this.onPageNumberSelected.emit(page);
}

}
