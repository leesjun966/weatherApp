import React from "react";
import Header from "./Header";
import { Provider } from "react-redux";

import store from "../store";
import Weather from "./layout/Weather";
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <Weather />
      </Provider>
    );
  }
}

export default App;
