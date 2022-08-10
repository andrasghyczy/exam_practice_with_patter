import React, { useState } from "react";
import Button from "@mui/material/Button";

function LaptopCards(props) {
  const { name, brand, weight } = props;

  //------------- useState for button ---------
  const [isHidden, setIsHidden] = useState(true);

  //------------- useState for button text ----
  const [buttonText, setButtonText] = useState("Show details");

  //------------- click handler function -------
  const clickHandler = () => {
    if (isHidden) {
      setIsHidden(false);
      setButtonText("Show less");
    } else {
      setIsHidden(true);
      setButtonText("Show details");
    }
  };

  return (
    <div>
      <h1>Laptop brand: {brand}</h1>
      <Button variant="text" onClick={clickHandler}>
        {buttonText}
      </Button>
      {!isHidden && (
        <div>
          <p>Laptop name: {name}</p>
          <p>Laptop weight: {weight} kg</p>
        </div>
      )}
    </div>
  );
}

export default LaptopCards;
