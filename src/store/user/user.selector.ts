import { createSelector } from "reselect";

import { Rootstate } from "../store";

import { UserState } from "./user.reducer";

export const selectUserReducer = (state: Rootstate): UserState => state.user;

export const selectCurrentUser = createSelector(
  selectUserReducer,
  (user) => user.currentUser
);
