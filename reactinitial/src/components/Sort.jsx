import React, { useState } from "react";
import Button from "@mui/material/Button";

function Sort(props) {
  const { isSorted, clickHandler } = props;

  return (
    <div>
      <p>Sort by weight</p>
      <Button variant="outlined" onClick={clickHandler}>
        <span>Sort by weight</span>
        {!isSorted ? <span>&#8681;</span> : <span>&#8593;</span>}
      </Button>
    </div>
  );
}

export default Sort;
