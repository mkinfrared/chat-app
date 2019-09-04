/* eslint-disable import/group-exports, import/prefer-default-export*/

export interface User {
  id?: string;
  email?: string;
  username: string;
}

export enum UserActions {
  REGISTER_REQUEST = "@@user/REGISTER_REQUEST",
  REGISTER_SUCCESS = "@@user/REGISTER_SUCCESS",
  REGISTER_FAIL = "@@user/REGISTER_FAIL"
}
