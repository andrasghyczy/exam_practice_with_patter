import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import LaptopCards from "./components/LaptopCards";
import LoadingMask from "./components/LoadingMask";

const App = () => {
  //------------- useState for button text ----
  const [laptops, setLaptops] = useState([]);

  //------------- useState for search value ----
  const [searchValue, setSearchValue] = useState("");

  //------------- useState for sort button ----
  const [isSorted, setIsSorted] = useState(false);

  //------------- useState for sort button ----
  const [isLoaded, setIsLoaded] = useState(false);

  const isSortedClickHandler = () => {
    setIsSorted(!isSorted);
    if (isSorted) {
      laptops.sort((a, b) => a.weight - b.weight);
    } else {
      laptops.sort((a, b) => b.weight - a.weight);
    }
  };

  const fetchLaptops = async () => {
    const response = await fetch("https://demoapi.com/api/laptop");
    const responseJson = await response.json();

    setLaptops(responseJson);
    setIsLoaded(true);
  };

  useEffect(() => {
    fetchLaptops();
  }, []);

  //console.log(laptops);//

  //------------- useState for search value ----
  const filteredLaptops = laptops.filter((laptop) => {
    return laptop.brand.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <>
      {isLoaded ? (
        <>
        <Header
          isSorted={isSorted}
          clickHandler={isSortedClickHandler}
          value={searchValue}
          setValue={setSearchValue}
        />
        {filteredLaptops.map((laptop) => (
          <LaptopCards
            key={laptop.name}
            name={laptop.name}
            brand={laptop.brand}
            weight={laptop.weight}
          />
        ))}
        </>
      ) : <LoadingMask />}
    </>
  );
};

export default App;
