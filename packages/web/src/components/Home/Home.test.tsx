import React from "react";
import { shallow } from "enzyme";

import { Home } from "./Home";

describe("Home", () => {
  it("should be defined", () => {
    const instance = shallow(<Home />).instance();

    expect(instance).toBeDefined();
  });
});
