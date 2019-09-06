import React from "react";
import moment from "moment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

class WeatherList extends React.Component {
  render() {
    const getDay = moment.unix(this.props.row.dt);
    const getWeather = this.props.row.weather[0];
    const maxTemp = Math.round(this.props.row.main.temp_max);
    const minTemp = Math.round(this.props.row.main.temp_min);

    console.log(this.props);

    return (
      <List>
        <ListItem>
          <ListItemText
            primary={moment(getDay).format("D MMM YYYY, dddd")}
            secondary={getWeather.main}
          />
          <Typography inline variant="body1" align="right">
            {minTemp} - {maxTemp}
          </Typography>
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    );
  }
}

export default WeatherList;
