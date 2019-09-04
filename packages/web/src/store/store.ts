/* eslint-disable import/no-extraneous-dependencies */
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import saga from "store/saga";
import reducers from "store/reducers";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(saga);

export default store;
