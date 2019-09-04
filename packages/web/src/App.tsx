import React from "react";
import { BrowserRouter } from "react-router-dom";
import { SocketEvents } from "@chat-app/common";

import Routes from "routes/Routes";
import socket from "utils/socket";
import css from "App.module.scss";

class App extends React.Component {
  componentDidMount() {
    socket.emit(SocketEvents.MARKLAR, "they took 'er jobs");
  }

  render() {
    return (
      <BrowserRouter>
        <div className={css.App}>
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

export { App };
