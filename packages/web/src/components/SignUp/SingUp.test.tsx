import React from "react";
import { mount, shallow } from "enzyme";

import SignUp, { SignUp as SUC } from "./SignUp";

describe("SignUp", () => {
  it("should be defined", () => {
    const instance = shallow(<SignUp />).instance();

    expect(instance).toBeDefined();
  });

  it("should toggle showPassword on state", () => {
    const wrapper = mount(<SignUp />);
    const instance = wrapper.find(SUC).instance() as SUC;

    expect(instance.state.showPassword).toBe(false);

    instance.togglePasswordVisibility();

    expect(instance.state.showPassword).toBe(true);
  });
});
