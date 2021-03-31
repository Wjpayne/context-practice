import { makeStyles } from "@material-ui/core";

export const cardStyle = makeStyles(() => ({
  paper: {
    position: "relative",
    width: "1200px",
    backgroundColor: "#f9f9f9",
    height: "600px",
    top: "200px",
  },

  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  divContainer: {
    width: "1200px",
    margin: "20px",
  },

  title: {
    textAlign: "center",
    fontSize: "30px",
  },

  root: {
    width: "300px",
    height: "200px",
    backgroundColor: "#FFF",
    transition: "box-shadow 0.3s ease ",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "inset 0px 0px 0px 2px #add8e6",
    },
    margin: "10px",
  },

  imageWrapper: {
    backgroundColor: "#f9f9f9",
    height: "75%",
    margin: "10px",
    width: "95%",
    verticalAlign: "baseline",
  },

  img: {
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
  },

  text: {
    display: "block",
    textAlign: "center",
    fontWeight: 700,
  },

  textPaper: {
    height: "60px",
    width: "75%",
    cursor: "pointer",
    margin: "20px",
    transition: "box-shadow 0.5s ease ",

    "&:hover": {
      boxShadow: "inset 0px 0px 0px 2px #add8e6",
    },
  },

  paperText: {
    display: "block",
    textAlign: "center",
    fontWeight: 700,
    lineHeight: "4.0",
  },

  transition: {
    transition: "box-shadow 0.5s ease ",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "inset 0px 0px 0px 2px #add8e6",
    },
  },

  dotDiv: {
    position: "relative",
    top: "130px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  dotSpanActive: {
    padding: "10px",
    marginRight: "10px",
    borderRadius: "50%",
    backgroundColor: "black",
  },
  dotSpan: {
    padding: "10px",
    marginRight: "10px",
    borderRadius: "50%",
    boxShadow: "inset 0px 0px 0px 1.5px black",
  },
}));
