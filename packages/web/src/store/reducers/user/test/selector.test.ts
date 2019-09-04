import { getUserSelector } from "store/reducers/user/selectors";
import store from "store/store";

describe("user selector", () => {
  it("should return user from store", () => {
    const result = getUserSelector(store.getState());

    expect(result).toMatchObject(store.getState().user);
  });
});
