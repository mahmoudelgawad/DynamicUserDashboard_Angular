import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GlobalAppState } from '../models/global-app-state';
import { User } from '../models/user-model';
import { selectUsersState, usersSelector } from '../store/users.selectors';
import { UsersService } from '../services/users.service';
import { UsersState } from '../models/users-state.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  idParam:string | null=null;
  usersState$: Observable<UsersState> = this.store.select(selectUsersState);
  user : User | undefined ;
constructor(private router:Router,private route:ActivatedRoute,
  private store:Store<GlobalAppState>,
  private usersService:UsersService
  ){
}

ngOnInit(): void {
  this.idParam = this.route.snapshot.queryParamMap.get('id');
  this.LoadUserDetails();
}

LoadUserDetails(){
 if(!this.idParam){
  return;
 }
 else{
  this.usersService.getUserDetails(Number(this.idParam)).subscribe(res => {
    this.user = res.data;
  });
 }
}

goToHome(){
  this.router.navigate(['']);
}

onClickConnect(email:string){
  location.href=`mailto:${email}`;
}

}
