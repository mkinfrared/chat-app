import React from "react";
import { shallow } from "enzyme";
import { createMemoryHistory, createLocation } from "history";
import { match } from "react-router";

import { Routes } from "routes/Routes";

const history = createMemoryHistory();
const path = "/";

const matchObj: match<{ id: string }> = {
  isExact: false,
  path,
  url: path,
  params: { id: "1" }
};

const location = createLocation(matchObj.url);

describe("Routes", () => {
  it("should be defined", () => {
    const instance = shallow(
      <Routes
        userID={undefined}
        history={history}
        location={location}
        match={matchObj}
      />
    );

    expect(instance).toBeDefined();
  });

  it("should call unauthorized method when userID prop is falsy", () => {
    const wrapper = shallow<Routes>(
      <Routes
        userID={""}
        history={history}
        location={location}
        match={matchObj}
      />
    );

    const instance = wrapper.instance();
    jest.spyOn(instance, "unauthorized");
    jest.spyOn(instance, "authorized");

    instance.forceUpdate();

    expect(instance.unauthorized).toBeCalled();
    expect(instance.authorized).not.toBeCalled();
  });

  it("should call authorized method when userID prop is truthy", () => {
    const wrapper = shallow<Routes>(
      <Routes
        userID={"42"}
        history={history}
        location={location}
        match={matchObj}
      />
    );

    const instance = wrapper.instance();
    jest.spyOn(instance, "unauthorized");
    jest.spyOn(instance, "authorized");

    instance.forceUpdate();

    expect(instance.unauthorized).not.toBeCalled();
    expect(instance.authorized).toBeCalled();
  });
});
