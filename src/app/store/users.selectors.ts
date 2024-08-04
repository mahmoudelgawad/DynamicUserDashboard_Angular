import { createSelector } from "@ngrx/store";
import { UsersState } from "../models/users-state.model";

// as the provider 'provideStore' object structure
export const selectUsersState = (globalAppState:{usersState:UsersState}) => globalAppState.usersState;

export const isLoadingSelector = createSelector(
    selectUsersState,
    (usersState => usersState.isLoading)
);

export const usersSelector = createSelector(
    selectUsersState,
    (usersState) => usersState.users
);