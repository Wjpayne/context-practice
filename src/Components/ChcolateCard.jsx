import { Paper, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import ChoiceContext from "../ChoiceContext";
import { cardStyle } from "./CardStyles";
import { TeaCard } from "./TeaCard";

export const ChocolateCard = () => {
  const classes = cardStyle();

  const [item, setItem] = useState([]);

  const [open, setOpen] = useState(false);

  const { userChoice, setUserChoice } = useContext(ChoiceContext);

  const handleClick = (title) => {
    setUserChoice({ chocolate: title, dots: "1" });
    setOpen(true);
  };

  useEffect(() => {
    axios.get("ChocolateData.json").then((response) => {
      setItem(response.data);
    });
  }, []);
  return (
    <>
      {!open ? (
        <div className={classes.container}>
          <Paper variant="outlined" className={classes.paper}>
            <Typography className={classes.title}>
              What is your Favorite Chocolate?
            </Typography>
            <div className={classes.divContainer}>
              <Grid justify="center" container>
                {item.map((element, i) => (
                  <div
                    key={i}
                    className={classes.root}
                    onClick={() => handleClick(element.text)}
                  >
                    <div key={i + 1} className={classes.imageWrapper}>
                      <img
                        alt="dark-chocolate"
                        src={element.image}
                        className={classes.img}
                        key={i}
                      />
                    </div>
                    <div key={i} className={classes.text}>
                      <span key={i}>{element.text}</span>
                    </div>
                  </div>
                ))}
              </Grid>
            </div>
          </Paper>
        </div>
      ) : (
        <TeaCard chocolate={userChoice.chocolate} />
      )}
    </>
  );
};
