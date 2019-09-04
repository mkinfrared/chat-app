import React from "react";
import { shallow } from "enzyme";

import { App } from "App";

describe("App", () => {
  it("should open page in browser", async () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(instance).toBeDefined();
  });
});
