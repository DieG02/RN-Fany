import React, { useContext } from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
} from 'react-native'

import SearchBar from './SearchBar'
import Item from './Item'
import { Colors } from '../Stylers'
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
        : <Text>We couldn't find results that match with your search</Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: Colors.BLACK,
    width: '100%',
  },
  list: {
    // backgroundColor: Colors.MAIN,
    flex: 1,
    width: '100%',
    marginBottom: 45,
    paddingHorizontal: 20,
  }

})

export default Results