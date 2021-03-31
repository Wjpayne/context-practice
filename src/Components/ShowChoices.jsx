import React, { useContext } from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import { cardStyle } from "./CardStyles";
import ChoiceContext from "../ChoiceContext";

export const ShowChoices = () => {
  const classes = cardStyle();

  const { userChoice } = useContext(ChoiceContext);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.divContainer}>
          <Typography className={classes.title}>
            These are you Answers!
          </Typography>
          <Grid container justify="center" direction="row">
            <Paper className={classes.textPaper}>
              <Typography className={classes.paperText}>
                1: {userChoice.chocolate}
              </Typography>
            </Paper>
            <Paper className={classes.textPaper}>
              <Typography className={classes.paperText}>
                2: {userChoice.tea}
              </Typography>
            </Paper>
            <Paper className={classes.textPaper}>
              <Typography className={classes.paperText}>
                3: {userChoice.drink}
              </Typography>
            </Paper>

            <Paper className={classes.textPaper}>
              <Typography className={classes.paperText}>
                4: {userChoice.juice}
              </Typography>
            </Paper>

            <Paper className={classes.textPaper}>
              <Typography className={classes.paperText}>
                5: {userChoice.wine}
              </Typography>
            </Paper>

            <Paper className={classes.textPaper}>
              <Typography className={classes.paperText}>
                6: {userChoice.adventure}
              </Typography>
            </Paper>

            <Paper className={classes.textPaper}>
              <Typography className={classes.paperText}>
                7: {userChoice.lastQuestion}
              </Typography>
            </Paper>
          </Grid>
        </div>
      </div>
    </>
  );
};
