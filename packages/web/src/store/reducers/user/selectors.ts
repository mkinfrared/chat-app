import { createSelector } from "reselect";

import { AppState } from "store/store.type";

const getUser = (state: AppState) => state.user;
const getUserSelector = createSelector(
  getUser,
  user => user
);

const getUserID = (state: AppState) => state.user.id;
const getUserIDSelector = createSelector(
  getUserID,
  id => id
);

export { getUserSelector, getUserIDSelector };
