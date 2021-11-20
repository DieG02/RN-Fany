import React, { createContext, useState } from "react";

//Create Context
export const SearchContext = createContext();

//Create SearchProvider
const SearchProvider = (props) => {
  const [results, setResults] = useState([]);

  return (
    <SearchContext.Provider value={{ results, setResults }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
