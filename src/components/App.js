import React from "react";
import Header from "./Header";
import { Provider } from "react-redux";
import store from "../store";
import Weather from "./layout/Weather";
import CurrentWeather from "./layout/CurrentWeather";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

/**
 * A place where calling each of the components
 */
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <Container>
            <Header />
            <Container>
              <Grid item xs={12} md={6}>
                <CurrentWeather />
              </Grid>
            </Container>
            <Weather />
          </Container>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
