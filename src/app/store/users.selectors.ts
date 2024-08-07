import { createSelector } from "@ngrx/store";
import { UsersState } from "../models/users-state.model";
import { GlobalAppState } from "../models/global-app-state";

//map function on as the provider 'provideStore' object structure
export const selectUsersState = (globalAppState:GlobalAppState) => globalAppState.usersState;

export const isLoadingSelector = createSelector(
    selectUsersState,
    (usersState => usersState.isLoading)
);

export const usersSelector = createSelector(
    selectUsersState,
    (usersState) => usersState.users
);