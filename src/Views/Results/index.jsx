import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Keyboard,
  FlatList,
} from 'react-native'
import { connect } from 'react-redux'
import Entypo from 'react-native-vector-icons/Entypo'

import SearchBar from './SearchBar'
import Item from './Item'
import { Colors } from '../Stylers'


function Results({ navigation }) {
  
  const [results, setResults] = useState([]);

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
      <SearchBar setResults={setResults} />
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

const mapStateToProps = state => ({
  displayPlayer: state.app.displayPlayer
})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Results)