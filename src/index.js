import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";
import reset from "styled-reset";
import "./typography";
import App from "components/App";

injectGlobal`
  ${reset},
  body {
    background-color: #ecf0f1;
  }
`;

ReactDOM.render(<App />, document.getElementById("root"));
