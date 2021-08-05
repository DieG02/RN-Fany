import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Keyboard,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'

import { 
  GREY, LIGHT, WHITE, BLACK,
} from '../Stylers'
import Times from '../../assets/svg/Times'

function Results ({ navigation }) {

  const FocusAwareStatusBar = (props) => {
    const isFocused = navigation.isFocused();
    return isFocused && <StatusBar {...props} />
  }

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        translucent={true}
        backgroundColor='transparent'
        barStyle='light-content'
      />
      <View style={styles.searchBar}>
        <TouchableOpacity 
          style={styles.icon}
          onPress={() => console.log('Go back')}
          activeOpacity={0.1}
        >
          <Entypo name="chevron-small-left" size={25} color={LIGHT} />
        </TouchableOpacity>
        <TextInput
          autoFocus
          // value={value}
          style={styles.input}
          placeholder='Enter name or URL'
          placeholderTextColor={GREY}
        />
        <TouchableOpacity 
          style={styles.icon}
          onPress={() => console.log('Empty input')}
          activeOpacity={0.1}
        >
          <Times width='20' height='20' color={LIGHT} />
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: BLACK,
    width: '100%',
  },
  searchBar: {
    backgroundColor: '#303030',
    width: '100%',
    height: 50 + StatusBar.currentHeight,
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  input: {
    width: '78%',
    color: WHITE,
    fontSize: 14,
    paddingTop: 3,
    paddingLeft: 10,
  },
  icon: {
    width: '11%',
    justifyContent: 'center',
    alignItems: 'center',
  }

})

export default Results