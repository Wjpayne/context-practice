import React, { useEffect, useState, useContext } from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import ChoiceContext from "../ChoiceContext";
import { cardStyle } from "./CardStyles";
import { Adventure } from "./Adventure";

export const WineParing = (props) => {
  const classes = cardStyle();

  const { chocolate, tea, drink, juice } = props;

  const [item, setItem] = useState([]);

  const [open, setOpen] = useState(false);

  const { userChoice, setUserChoice } = useContext(ChoiceContext);

  const handleClick = (title) => {
    setUserChoice({
      tea: tea,
      chocolate: chocolate,
      drink: drink,
      juice: juice,
      wine: title,
      dots: "5",
    });
    setOpen(true);
  };

  useEffect(() => {
    axios.get("WineData.json").then((response) => {
      setItem(response.data);
    });
  }, []);
  return (
    <>
      {!open ? (
        <div className={classes.container}>
          <Paper variant="outlined" className={classes.paper}>
            <Typography className={classes.title}>
              What is your favorite wine pairing
            </Typography>
            <div className={classes.divContainer}>
              <Grid container justify="center" direction="row">
                {item.map((element, i) => (
                  <Paper
                    onClick={() => handleClick(element.text)}
                    className={classes.textPaper}
                    key={i}
                  >
                    <Typography className={classes.paperText}>
                      {element.text}
                    </Typography>
                  </Paper>
                ))}
              </Grid>
            </div>
          </Paper>
        </div>
      ) : (
        <Adventure
          chocolate={chocolate}
          tea={tea}
          drink={drink}
          juice={juice}
          wine={userChoice.wine}
        />
      )}
    </>
  );
};
