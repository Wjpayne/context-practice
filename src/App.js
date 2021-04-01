
import { useState } from "react";
import ChoiceContext from "./ChoiceContext";
import { ChocolateCard } from "./Components/ChcolateCard";
import { Dots } from "./Components/Dots";
import { cardStyle } from "./Components/CardStyles";

function App() {
  const [userChoice, setUserChoice] = useState({
    chocolate: "",
    tea: "",
    drink: "",
    juice: "",
    wine: "",
    adventure: "",
    lastQuestion: "",
    dots: 0,
  });

  const classes = cardStyle();
  return (
    <div className="App">
      <ChoiceContext.Provider value={{ userChoice, setUserChoice }}>
        <ChocolateCard />
        <div className={classes.dotDiv}>
          <Dots />
        </div>
      </ChoiceContext.Provider>
    </div>
  );
}

export default App;
