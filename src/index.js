import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Theme from "./utils/theme";

ReactDOM.render(
  <MuiThemeProvider theme={Theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
