import React, { createContext, useState } from 'react'
import ytdl from 'react-native-ytdl'
import axios from 'axios'
import { GOOGLE_API_KEY } from '@env'

//Create Context
export const SearchContext = createContext();

//Create SearchProvider
const SearchProvider = (props) => {
  const [results, setResults] = useState([]);
  // Custom function
  // async function searchResults(string) {
  //   const { api, key, max } = params;
  //   const query = string.replace(/\s+/g, '%20');
  //   const req = `${api}&q=${query}${key}${max}`;
  //   fetch(req)
  //     .then(res => {
  //       console.log('res', res)
  //       res.json()
  //     })
  //     .then(({ items }) => {
  //       setResults(items)
  //       console.log(items)
  //     });
  // }

  async function searchResults(string) {
    let playListItems = [];

    const url = 'https://youtube.googleapis.com/youtube/v3/search';
    const query = string.replace(/\s+/g, '%20');

    const options = {
      method: 'GET',
      url: url,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      params: {
        part: 'snippet',
        q: `${query}`,
        key: `${GOOGLE_API_KEY}`,
        maxResults: '5',
        fields: 'items(id,snippet(*))'
      }
    };
    const response = await axios(options);
    try {
      const data = await response.data;
      // setResults(data.items)
      console.log('------------- data.items.id ------------- \n\n')
      await data.items.map(({ snippet, id }) => {
        console.log(snippet, id)
        if (id.kind === 'youtube#playlist') playListItems.push(id.playlistId);
        console.log('------------- Item ------------- \n\n')
      })
    } catch {
      console.log('Hubo un error');
    }
    console.log(playListItems);


    console.log('-------------  /////////////  ------------- \n\n')
    console.log('-------------  /////////////  ------------- \n\n')
    console.log('-------------  /////////////  ------------- \n\n')
    try {
      let props = {
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/playlistItems',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        },
        params: {
          part: 'snippet',
          playlistId: playListItems[0],
          key: `${GOOGLE_API_KEY}`,
          maxResults: '5',
        }
      }
      axios(props)
      .then(({ data }) => {
        console.log('------------- data de playlist funcionó ------------- \n\n')
        console.log(data)
        // data.items.map(({ snippet }) => {
        //   console.log(snippet.resourceId)
        //   console.log('------------- Playlist Item ------------- \n\n')
        // })
      })
    } catch {
      console.log('Hubo 2 errores');
    }


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