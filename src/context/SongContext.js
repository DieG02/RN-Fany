import React, { createContext, useState } from "react";

//Create Context
export const SongContext = createContext();

//Create SongProvider
const SongProvider = (props) => {
  const [song, setSong] = useState({});

  return (
    <SongContext.Provider value={{ song, setSong }}>
      {props.children}
    </SongContext.Provider>
  );
};

export default SongProvider;
