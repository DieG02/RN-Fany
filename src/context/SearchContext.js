import React, { createContext, useState } from 'react'
import ytdl from 'react-native-ytdl'
import { GOOGLE_API_KEY } from '@env'

//Create Context
export const SearchContext = createContext();

//Create SearchProvider
const SearchProvider = (props) => {
  const [results, setResults] = useState([]);

  const params = {
    api: 'https://youtube.googleapis.com/youtube/v3/search?part=snippet',
    key: `&key=${GOOGLE_API_KEY}`,
    max: '&maxResults=5',
  };

  // Custom function
  async function searchResults(string) {
    const { api, key, max } = params;
    const query = string.replace(/\s+/g, '%20');
    const req = `${api}&q=${query}${key}${max}`;
    fetch(req)
      .then(res => res.json())
      .then(({ items }) => {
        setResults(items)
      });
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
