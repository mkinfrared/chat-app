import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";

import SignUp from "components/SignUp";
import Home from "components/Home";
import { RoutesProps } from "routes/Routes.type";
import { getUserIDSelector } from "store/reducers/user/selectors";
import { AppState } from "store/store.type";

class Routes extends React.Component<RoutesProps> {
  authorized = () => (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </>
  );

  unauthorized = () => (
    <>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/marklar" component={Home} />
        <Redirect to="/signup" />
      </Switch>
    </>
  );

  render() {
    const { userID } = this.props;

    if (!userID) {
      return this.unauthorized();
    }

    return this.authorized();
  }
}

const mapStateToProps = (state: AppState) => ({
  userID: getUserIDSelector(state)
});

export default compose<React.ComponentClass>(
  withRouter,
  connect(mapStateToProps)
)(Routes);

export { Routes };
