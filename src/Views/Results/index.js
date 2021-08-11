import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Keyboard,
  TouchableOpacity,
} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'

import SearchBar from './SearchBar'
import { Colors } from '../Stylers'
import { GOOGLE_API_KEY } from '@env'


function Results({ navigation }) {

  const FocusAwareStatusBar = (props) => {
    const isFocused = navigation.isFocused();
    return isFocused && <StatusBar {...props} />
  }
  console.log(GOOGLE_API_KEY);

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        translucent={true}
        backgroundColor='transparent'
        barStyle='light-content'
      />
      <SearchBar /> 
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
  

})

export default Results