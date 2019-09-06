import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <ToolBar variant="dense">
          <Typography variant="h6" color="inherit">
            WeatherApp
          </Typography>
        </ToolBar>
      </AppBar>
    </div>
  );
};

export default Header;
