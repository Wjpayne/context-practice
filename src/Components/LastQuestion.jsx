import React, { useEffect, useState, useContext } from "react";
import { Paper, Grid, Typography, Slide } from "@material-ui/core";
import axios from "axios";
import ChoiceContext from "../ChoiceContext";
import { cardStyle } from "./CardStyles";
import { ShowChoices } from "./ShowChoices";
import CheckIcon from "@material-ui/icons/Check";

export const LastQuestion = (props) => {
  const classes = cardStyle();

  const { chocolate, tea, drink, juice, wine, adventure } = props;

  const [item, setItem] = useState([]);

  const [open, setOpen] = useState(false);

  const [clicked, setClicked] = useState([]);

  const { setUserChoice } = useContext(ChoiceContext);

  const handleClick = (title) => {
    setTimeout(() => {
      setClicked(title);
      setUserChoice({
        tea: tea,
        chocolate: chocolate,
        drink: drink,
        juice: juice,
        wine: wine,
        adventure: adventure,
        lastQuestion: title,
        dots: 7,
      });
      setOpen(true);
    }, 700);
  };

  useEffect(() => {
    axios.get("LastQuestion.json").then((response) => {
      setItem(response.data);
    });
  }, []);
  return (
    <>
      {!open ? (
        <Slide
          in={!open}
          style={{ transformOrigin: "0 0 0" }}
          {...(!open ? { timeout: 700 } : {})}
          mountOnEnter
          unmountOnExit
          direction="left"
        >
          <div className={classes.container}>
            <Paper variant="outlined" className={classes.paper}>
              <Typography className={classes.title}>
                Last question! Do you have a preference for red or white wines?
              </Typography>
              <div className={classes.divContainer}>
                <Grid container justify="center" direction="row">
                  {item.map((element, i) => (
                    <Paper
                      onClick={() => handleClick(element.text)}
                      className={classes.textPaper}
                      key={i}
                    >
                      {clicked.indexOf(element.text) ? (
                        <Typography className={classes.paperText}>
                          {element.text}
                        </Typography>
                      ) : (
                        <Typography className={classes.paperText}>
                          {element.text}
                          <CheckIcon className={classes.icon}></CheckIcon>
                        </Typography>
                      )}
                    </Paper>
                  ))}
                </Grid>
              </div>
            </Paper>
          </div>
        </Slide>
      ) : (
        <ShowChoices open={open} />
      )}
    </>
  );
};
