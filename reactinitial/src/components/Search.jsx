import { TextField } from "@mui/material";
import React from "react";

function Search(props) {
  const { value, setValue } = props;

  return (
    <TextField
      variant="outlined"
      type="text"
      placeholder="Search laptops"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default Search;
