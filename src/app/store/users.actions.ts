import {createAction, props} from '@ngrx/store';
import { ResponseObject } from '../models/response-object-model';

export const setUsersLoadingAction = createAction(
    '[Users] setUsersLoadingAction',
    props<{value:boolean}>());
export const setUsersAction = createAction(
    '[Users] setUsersAction',
    props<{value:ResponseObject}>());

