import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Form from "./form/Form";

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Field-Level Validation</h2>
      <Form onSubmit={values => console.log(values)} />
    </div>
  </Provider>,
  rootEl
);
