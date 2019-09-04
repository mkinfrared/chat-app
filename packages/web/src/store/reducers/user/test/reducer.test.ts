import reducer, { initialState } from "store/reducers/user/reducer";

describe("user reducer", () => {
  it("should return an initialState when state is not defined", () => {
    const state = undefined;
    const action = { type: "marklar" };
    const result = reducer(state, action);

    expect(result).toMatchObject(initialState);
  });
});
