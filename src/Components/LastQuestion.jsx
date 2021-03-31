import React, { useEffect, useState, useContext } from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import ChoiceContext from "../ChoiceContext";
import { cardStyle } from "./CardStyles";
import { ShowChoices } from "./ShowChoices";

export const LastQuestion = (props) => {
  const classes = cardStyle();

  const { chocolate, tea, drink, juice, wine, adventure } = props;

  const [item, setItem] = useState([]);

  const [open, setOpen] = useState(false);

  const { setUserChoice } = useContext(ChoiceContext);

  const handleClick = (title) => {
    setUserChoice({
      tea: tea,
      chocolate: chocolate,
      drink: drink,
      juice: juice,
      wine: wine,
      adventure: adventure,
      lastQuestion: title,
      dots: "7",
    });
    setOpen(true);
  };

  useEffect(() => {
    axios.get("LastQuestion.json").then((response) => {
      setItem(response.data);
    });
  }, []);
  return (
    <>
      {!open ? (
        <div className={classes.container}>
          <Paper variant="outlined" className={classes.paper}>
            <Typography className={classes.title}>
              How adventurous are you with new food and drink?
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
        <ShowChoices />
      )}
    </>
  );
};
