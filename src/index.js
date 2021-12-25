import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import usersReducer from "./features/users/usersSlice";

// add imports and code
import { createStore } from 'redux'
import { Provider } from "react-redux"

ReactDOM.render(
  // add imports and code
  <Provider store={createStore(usersReducer)}>
    <App />
  </Provider>,
  // add imports and code
  document.getElementById("root")
);
