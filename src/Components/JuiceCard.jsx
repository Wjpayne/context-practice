import { Paper, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import ChoiceContext from "../ChoiceContext";
import { cardStyle } from "./CardStyles";
import { WineParing } from "./WineParing";

export const JuiceCard = (props) => {
  const classes = cardStyle();

  const { chocolate, tea, drink } = props;

  const [item, setItem] = useState([]);

  const [open, setOpen] = useState(false);

  const { userChoice, setUserChoice } = useContext(ChoiceContext);

  const handleClick = (title) => {
    setUserChoice({
      tea: tea,
      chocolate: chocolate,
      drink: drink,
      juice: title,
      dots: "4",
    });
    setOpen(true);
  };

  useEffect(() => {
    axios.get("JuiceData.json").then((response) => {
      setItem(response.data);
    });
  }, []);
  return (
    <>
      {!open ? (
        <div className={classes.container}>
          <Paper variant="outlined" className={classes.paper}>
            <Typography className={classes.title}>
              What is your favorite juice
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
                        <div key="1" className={classes.imageWrapper}>
                          <img
                            alt="dark-chocolate"
                            src={element.image}
                            className={classes.img}
                          />
                        </div>
                        <div className={classes.text}>
                          <span>{element.text}</span>
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
        <WineParing
          chocolate={chocolate}
          tea={tea}
          drink={drink}
          juice={userChoice.juice}
        />
      )}
    </>
  );
};
