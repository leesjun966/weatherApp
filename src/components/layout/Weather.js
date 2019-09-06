import React from "react";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { getWeather } from "../../actions";
import WeatherList from "./WeatherList";
import moment from "moment";

class Weather extends React.Component {
  componentDidMount() {
    this.props.getWeather();
  }

  getEachDay = () => {
    const eachDay = this.props.weather;
    if (this.props.weather.length > 0) {
      return eachDay.map((row, index) => <WeatherList row={row} key={index} />);
    }
  };

  render() {
    return (
      <div>{this.getEachDay()}</div>
      //   <List>
      //     <ListItem>
      //       <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      //     </ListItem>
      //     <Divider variant="inset" component="li" />
      //     <ListItem>
      //       <ListItemText primary="Work" secondary="Jan 7, 2014" />
      //     </ListItem>
      //     <Divider variant="inset" component="li" />
      //     <ListItem>
      //       <ListItemText primary="Vacation" secondary="July 20, 2014" />
      //     </ListItem>
      //   </List>
    );
  }
}

const mapStateToProps = state => {
  return {
    weather: state.datas
  };
};

export default connect(
  mapStateToProps,
  { getWeather }
)(Weather);
