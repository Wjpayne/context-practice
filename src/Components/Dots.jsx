import { cardStyle } from "./CardStyles";
import React, { useContext } from "react";
import ChoiceContext from "../ChoiceContext";

export const Dots = () => {
  const { userChoice } = useContext(ChoiceContext);

  const classes = cardStyle();
  return (
    <>
      <div className={classes.dotDiv}>
        {userChoice.dots !== "0" ? (
          <span className={classes.dotSpanActive}></span>
        ) : (
          <span className={classes.dotSpan}></span>
        )}

        {userChoice.dots !== "1" ? (
          <span className={classes.dotSpanActive}></span>
        ) : (
          <span className={classes.dotSpan}></span>
        )}
        {userChoice.dots !== "2" ? (
          <span className={classes.dotSpanActive}></span>
        ) : (
          <span className={classes.dotSpan}></span>
        )}
        {userChoice.dots !== "3" ? (
          <span className={classes.dotSpanActive}></span>
        ) : (
          <span className={classes.dotSpan}></span>
        )}
        {userChoice.dots !== "4" ? (
          <span className={classes.dotSpanActive}></span>
        ) : (
          <span className={classes.dotSpan}></span>
        )}
        {userChoice.dots !== "5" ? (
          <span className={classes.dotSpanActive}></span>
        ) : (
          <span className={classes.dotSpan}></span>
        )}
        {userChoice.dots !== "6" ? (
          <span className={classes.dotSpanActive}></span>
        ) : (
          <span className={classes.dotSpan}></span>
        )}
      </div>
    </>
  );
};
