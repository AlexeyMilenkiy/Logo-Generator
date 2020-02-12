import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";
import * as serviceWorker from "./serviceWorker";

import "./index.scss";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
