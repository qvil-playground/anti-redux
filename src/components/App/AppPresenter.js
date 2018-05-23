import React, { Fragment } from "react";
import Flex from "styled-flex-component";
import Store from "store";
// import Header from "components/Header";
// import Notification from "components/Notification";

const AppPresenter = () => {
  return (
    <Fragment>
      {/* <Header /> */}
      <Flex alignCenter full column>
        <Store.Consumer>
          {store => {
            return <div>{JSON.stringify(store)}</div>;
          }}
        </Store.Consumer>
      </Flex>
    </Fragment>
  );
};

export default AppPresenter;
