import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/styles";

const usestyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 20,
    padding: (5, 0, 5, 20),
  },
});
function simpleCard() {
  const classes = usestyles();
  return (
    <CardContent>
      <Card className={classes.root}>
        <Typography
          className={classes.title}
          color="textPrimary"
          display="inline"
        >
          Ashutosh Tiwari
        </Typography>
      </Card>
    </CardContent>
  );
}

export default simpleCard;
