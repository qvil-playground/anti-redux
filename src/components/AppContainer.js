import React, { Component } from "react";
import Store from "store";

class AppContainer extends Component {
  render() {
    return <Store.Provider>AppContainer</Store.Provider>;
  }
}

export default AppContainer;
