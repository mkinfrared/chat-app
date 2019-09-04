import { Reducer } from "redux";

import { User } from "store/reducers/user/types";

const initialState: User = {
  id: "",
  username: "",
  email: ""
};

const reducer: Reducer<User> = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};

export default reducer;

export { initialState };
