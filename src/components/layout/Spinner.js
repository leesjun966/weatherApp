import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(10)
  }
}));

/**
 * A circular moving icon to render when error is occurred
 */
export default function Spinner() {
  const classes = useStyles();

  return (
    <div>
      <CircularProgress className={classes.progress} />
    </div>
  );
}
