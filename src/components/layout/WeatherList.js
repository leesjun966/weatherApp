import React from "react";
import moment from "moment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

/**
 * This is to handle and render each day into a list
 */
class WeatherList extends React.Component {
  //Using moment library to extract the time information
  render() {
    const getDay = moment.unix(this.props.row.dt);
    const getWeather = this.props.row.weather[0];
    const maxTemp = Math.round(this.props.row.main.temp_max);
    const minTemp = Math.round(this.props.row.main.temp_min);

    return (
      <List>
        <Container>
          <Grid item xs={12} md={6}>
            <ListItem>
              <ListItemText
                primary={moment(getDay).format("D MMM YYYY, dddd")}
                secondary={getWeather.main}
              />
              <Typography variant="body1" align="center">
                {minTemp}°C - {maxTemp}°C
              </Typography>
            </ListItem>
          </Grid>
        </Container>
        <Divider component="li" />
      </List>
    );
  }
}

export default WeatherList;
