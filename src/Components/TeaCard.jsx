import { Paper, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import ChoiceContext from "../ChoiceContext";
import { cardStyle } from "./CardStyles";
import { DrinkCard } from "./DrinkCard";

export const TeaCard = (props) => {
  const classes = cardStyle();

  const { chocolate } = props;

  const [item, setItem] = useState([]);

  const [open, setOpen] = useState(false);

  const { userChoice, setUserChoice } = useContext(ChoiceContext);

  const handleClick = (title) => {
    setUserChoice({ tea: title, chocolate: chocolate, dots: "2" });
    setOpen(true);
  };

  useEffect(() => {
    axios.get("TeaData.json").then((response) => {
      setItem(response.data);
    });
  }, []);
  return (
    <>
      {!open ? (
        <div className={classes.container}>
          <Paper variant="outlined" className={classes.paper}>
            <Typography className={classes.title}>
              How do you take your tea?
            </Typography>
            <div className={classes.divContainer}>
              <>
                <Grid justify="center" container>
                  {item.map((element, i) => (
                    <React.Fragment key={i}>
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
                            key={i + 2}
                          />
                        </div>
                        <div key={i} className={classes.text}>
                          <span key={i}>{element.text}</span>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </Grid>
              </>
            </div>
          </Paper>
        </div>
      ) : (
        <DrinkCard chocolate={userChoice.chocolate} tea={userChoice.tea} />
      )}
    </>
  );
};
