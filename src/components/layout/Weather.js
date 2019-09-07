import React from "react";
import { connect } from "react-redux";
import { getWeather } from "../../actions";
import Spinner from "./Spinner";
import WeatherList from "./WeatherList";
import Typography from "@material-ui/core/Typography";

/**
 * This is the place to trigger the get weather information action
 */
class Weather extends React.Component {
  componentDidMount() {
    this.props.getWeather();
  }

  //Divide the array into each particular day
  getEachDay = () => {
    const eachDay = this.props.weather;
    if (this.props.weather.length > 0) {
      return eachDay.map((row, index) => <WeatherList row={row} key={index} />);
    }
  };

  //If receive error from the api, a spinner and error message will be rendered
  renderError() {
    if (this.props.error.length > 0) {
      const message = Object.values(this.props.error);
      return (
        <div>
          <Spinner />
          <Typography
            variant="body2"
            align="center"
            color="secondary"
            display="inline"
          >
            {message}
          </Typography>
        </div>
      );
    } else {
      return <div>{this.getEachDay()}</div>;
    }
  }
  render() {
    return <div>{this.renderError()}</div>;
  }
}

// To gain access of the state from the reducers
const mapStateToProps = state => {
  return {
    weather: state.datas,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getWeather }
)(Weather);
