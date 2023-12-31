import React, { useContext } from 'react'
import {
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native'
import axios from 'axios'

import SearchBar from './SearchBar'
import Item from './Item'
import styles from './styles'
import { SearchContext } from '../../context/SearchContext'


function Results({ navigation }: any) {
  const { results } = useContext(SearchContext);

  const FocusAwareStatusBar = (props) => {
    const isFocused = navigation.isFocused();
    return isFocused && <StatusBar {...props} />
  }

  const getPlaylist = async (playlistId) => {
    const url = 'https://www.googleapis.com/youtube/v3/playlistItems';
    const options = {
      method: 'GET',
      url: url,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      params: {
        part: 'snippet',
        playlistId: playlistId,
        key: `${GOOGLE_API_KEY}`,
        maxResults: '20',
      }
    };
    const response = await axios(options);
    // const responseOK = response && response.status === 200 && response.statusText === 'OK';
    try {
      const data = await response.data;
      // setResults(data.items)
      // console.log(data.items)
      console.log(Object.keys(data))
      console.log(data)
    } catch {
      console.log('Hubo un error');
    }
  }

  // console.log(results)
  const RenderItem = ({ item: { snippet, id } }) => {
    const { channelTitle, thumbnails, title, playlistId = ''} = snippet;
    const videoId = id.videoId;
    
    playlistId && console.log('Esto es una playlist id: ', playlistId)

    return <Item 
      channelTitle={channelTitle}
      thumbnails={thumbnails}
      title={title}
      videoId={videoId}
      // playlistId={playlistId}
    />
  }
  
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        translucent={true}
        backgroundColor='transparent'
        barStyle='light-content'
      />
      <SearchBar />
      {results.length > 0
        ? <FlatList
          style={styles.list}
          contentContainerStyle={{ paddingTop: 20, paddingBottom: 5 }}
          data={results}
          renderItem={RenderItem}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
        : <View style={styles.warning}>
            <Text>No results to display</Text>
          </View>
      }
    </View>
  )
}

export default Results