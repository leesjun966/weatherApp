import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { getWeather } from "../../actions";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

/**
 * The first card box which is to display the current weather,
 * city name, and the time
 */
class CurrentWeather extends React.Component {
  componentDidMount() {
    this.props.getWeather();
  }
  /**
   * helper methods for retrieving the cityname, temperature
   * weather and time
   */
  getCityName() {
    if (this.props.weather) {
      const city_name = this.props.city.name;
      const country_name = this.props.city.country;
      const name = city_name + ", " + country_name;
      return name;
    }
  }

  getTemp() {
    if (this.props.weather) {
      const temp = Math.round(this.props.weather.main.temp);
      return temp;
    }
  }

  getWeather() {
    if (this.props.weather) {
      const description = this.props.weather.weather[0].main;
      return description;
    }
  }

  getTime() {
    if (this.props.weather) {
      const time = moment.unix(this.props.weather.dt);

      return (
        <React.Fragment>
          {moment(time).format("ddd, D MMM YYYY h:mma ")}SGT
        </React.Fragment>
      );
    }
  }

  //If there is error this will not be rendered
  renderHelper() {
    if (!this.props.error.length > 0) {
      return (
        <Paper style={{ marginTop: "30px" }}>
          <Grid container spacing={3}>
            <Grid item>
              <Typography variant="h1" gutterBottom>
                {this.getTemp()}°C
              </Typography>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid
                justify="space-evenly"
                item
                xs
                container
                direction="column"
                spacing={1}
              >
                <Grid item xs>
                  <Typography variant="h5">{this.getCityName()}</Typography>
                  <Typography variant="h5">{this.getTime()}</Typography>
                  <Typography variant="h6">{this.getWeather()}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      );
    }
  }

  render() {
    return <div>{this.renderHelper()}</div>;
  }
}

// To gain access of the state from the reducers
const mapStateToProps = state => {
  return {
    weather: state.datas[0],
    city: state.city,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getWeather }
)(CurrentWeather);
