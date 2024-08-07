import {createAction, props} from '@ngrx/store';
import { ResponseObject } from '../models/response-object-model';
import { User } from '../models/user-model';

export const setUsersLoadingStatusAction = createAction(
    '[Users] setUsersLoadingStatusAction',
    props<{value:boolean}>());

export const loadUsersAction = createAction(
    '[Users] loadUsersAction',
    props<{value:number}>()
);
export const setUsersAction = createAction(
    '[Users] setUsersAction',
    props<{value:ResponseObject}>());

export const setFilterUsersAction = createAction(
    "[Users] searchUsersAction",
    props<{value:User[]}>()
);

export const testAction = createAction("[Test] testAction", props<{value:number}>());

