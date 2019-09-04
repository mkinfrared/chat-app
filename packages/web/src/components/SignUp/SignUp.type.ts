/* eslint-disable import/group-exports */

export interface SignUpProps {}

export interface SignUpState {
  showPassword: boolean;
}

export interface FormValues {
  email: string;
  password: string;
  username: string;
  passwordConfirmation: string;
}
