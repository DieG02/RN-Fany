import React, { createContext, useState } from 'react'
import ytdl from 'react-native-ytdl'

//Create Context
export const SearchContext = createContext();

//Create SearchProvider
const SearchProvider = (props) => {
  const [results, setResults] = useState([]);

  // Custom function
  async function searchResults(params) {
    const { base, query, key, max } = params;
    const req = `${base}&q=${query}${key}${max}`;
    const response = await fetch(req)
      .then(res => res.json())
      .then((data) => {
        return data.items
      })
    setResults(response);
  }

  async function getSound(id) {
    if (id === '') return null;
    const url = 'https://www.youtube.com/watch?v=' + id
    console.log('Fetching resources...');
    const data = await ytdl(url, { quality: 'highestaudio' })
    const info = await ytdl.getBasicInfo(url, { quality: 'highestaudio' })
    console.log('Completed!')
    return {
      resource: data[0].url,
      duration: info.formats[0].approxDurationMs
    }
  }


  return (
    <SearchContext.Provider value={{ results, searchResults, getSound }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
