import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./Components/Container";
import Heading from "./Components/Heading";
import Display from "./Components/Display";
import Buttons from "./Components/Buttons";

function App() {
  let [calVal, setCalVal] = useState("");

  let toHandleButton = (value) => {
    if (value === "C") {
      setCalVal("");
    } else if (value === "=") {
      let result = eval(calVal);
      setCalVal(result);
    } else {
      let newValue = calVal + value;
      setCalVal(newValue);
    }
  };
  return (
    <>
      <Container>
        <Heading />
        <Display checkDisplayValue={calVal} />
        <Buttons toHandleButton={toHandleButton} />
      </Container>
    </>
  );
}

export default App;
