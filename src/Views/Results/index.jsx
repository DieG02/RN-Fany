import React, { useContext } from 'react'
import {
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native'

import SearchBar from './SearchBar'
import Item from './Item'
import styles from './styles'
import { SearchContext } from '../../context/SearchContext'


function Results({ navigation }) {
  const { results } = useContext(SearchContext);

  const FocusAwareStatusBar = (props) => {
    const isFocused = navigation.isFocused();
    return isFocused && <StatusBar {...props} />
  }

  const RenderItem = ({ item: { snippet, id } }) => {
    const { channelTitle, thumbnails, title } = snippet;
    const videoId = id.videoId;
 
    return <Item 
      channelTitle={channelTitle}
      thumbnails={thumbnails}
      title={title}
      videoId={videoId}
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