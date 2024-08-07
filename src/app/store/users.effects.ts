import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as UsersActions from "./users.actions";
import { map, of, switchMap } from "rxjs";
import { UsersService } from "../services/users.service";
import { ResponseObject } from "../models/response-object-model";

@Injectable()
export class UsersEffects{
    
    constructor(private actions$:Actions,private userService:UsersService){}

    testEffect = createEffect(() =>
      this.actions$.pipe(
      ofType(UsersActions.testAction),
      switchMap((action) => {
        // this.userService.getUsers(action._p.value).pipe(
        //     map(res => UsersActions.setUsersAction({value:res}))
        // );
        return of(UsersActions.setUsersAction({value:{} as ResponseObject}));
      })
    ));
}