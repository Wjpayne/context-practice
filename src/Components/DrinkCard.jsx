import { Paper, Grid, Typography, Slide } from "@material-ui/core";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import ChoiceContext from "../ChoiceContext";
import { cardStyle } from "./CardStyles";
import { JuiceCard } from "./JuiceCard";
import CheckIcon from "@material-ui/icons/Check";

export const DrinkCard = (props) => {
  const classes = cardStyle();

  const { chocolate, tea } = props;

  const [item, setItem] = useState([]);

  const [open, setOpen] = useState(false);

  const [clicked, setClicked] = useState([]);

  const { userChoice, setUserChoice } = useContext(ChoiceContext);

  const handleClick = (title) => {
    setClicked(title);
    setTimeout(() => {
      setUserChoice({ tea: tea, chocolate: chocolate, drink: title, dots: 3 });
      setOpen(true);
    }, 700);
  };

  useEffect(() => {
    axios.get("DrinkData.json").then((response) => {
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
                What's your favorite drink when you are out of wine?
              </Typography>
              <div className={classes.divContainer}>
                <>
                  <Grid justify="center" container>
                    {item.map((element, i) => (
                      <div
                        key={i}
                        className={classes.root}
                        onClick={() => handleClick(element.text)}
                      >
                        <div key={i + 1} className={classes.imageWrapper}>
                          {clicked.indexOf(element.text) ? (
                            <>
                              <img
                                alt="drink"
                                src={element.image}
                                className={classes.img}
                                key={i}
                              />
                            </>
                          ) : (
                            <>
                              <img
                                alt="drink"
                                src={element.image}
                                className={classes.imgActive}
                                key={i}
                              />
                              <CheckIcon className={classes.checkIcon} />
                            </>
                          )}
                        </div>
                        <div key={i} className={classes.text}>
                          <span key={i}>{element.text}</span>
                        </div>
                      </div>
                    ))}
                  </Grid>
                </>
              </div>
            </Paper>
          </div>
        </Slide>
      ) : (
        <JuiceCard chocolate={chocolate} tea={tea} drink={userChoice.drink} />
      )}
    </>
  );
};
