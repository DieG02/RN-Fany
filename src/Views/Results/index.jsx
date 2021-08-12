import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Keyboard,
  FlatList,
} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'

import SearchBar from './SearchBar'
import { Colors } from '../Stylers'


function Results({ navigation }) {

  const [results, setResults] = useState([]);

  const FocusAwareStatusBar = (props) => {
    const isFocused = navigation.isFocused();
    return isFocused && <StatusBar {...props} />
  }
  
  console.log(results);
  
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        translucent={true}
        backgroundColor='transparent'
        barStyle='light-content'
      />
      <SearchBar setResults={setResults} />
      <FlatList
        style={styles.list}
      />
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
    backgroundColor: '#0f0',
    flex: 1,
    width: '100%',
    marginTop: 5,
    marginBottom: 50,
  }

})

export default Results