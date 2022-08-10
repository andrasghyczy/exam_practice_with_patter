import React from "react";
import Search from "./Search";
import Sort from "./Sort";

function Header(props) {
  const { value, setValue, isSorted, clickHandler } = props;

  return (
    <>
      <h1>Laptops</h1>
      <Search value={value} setValue={setValue} />
      <Sort isSorted={isSorted} clickHandler={clickHandler} />
    </>
  );
}

export default Header;
