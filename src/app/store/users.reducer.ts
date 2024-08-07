import { ActionReducerMap, createReducer, MetaReducer, on } from "@ngrx/store";
import { UsersState } from "../models/users-state.model";
import * as UserActions from './users.actions';
import { state } from "@angular/animations";
import { isDevMode } from "@angular/core";
import { UsersService } from "../services/users.service";


export const  initialState : UsersState = {
    isLoading:false,
    error:null,
    currentPage:0,
    userPerPage:0,
    totalUsers:0,
    users:[],
    currentUserId:0
};

export const usersReducer = createReducer(
    initialState,
    on(UserActions.setUsersLoadingStatusAction, (state, action) => {
        return {...state, isLoading:action.value}
    }),
    on(UserActions.setUsersAction, (state, action) => {
        return {...state,
            users : action.value.data,
            currentPage : action.value.page,
            userPerPage : action.value.per_page,
            totalUsers : action.value.total
        }
    }),
    on(UserActions.setFilterUsersAction, (state, action) => {
        return {...state, users:action.value}
    })
);