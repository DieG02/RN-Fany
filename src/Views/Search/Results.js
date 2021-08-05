import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Pressable,
  Keyboard,
} from 'react-native'

import { DARK, LIGHT, WHITE, BLACK } from '../Stylers'

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
        <View style={styles.icon}>
          <Text>S</Text>
        </View>
        <Text>
          Results Screen
        </Text>
        <View style={styles.icon}>
          <Text>x</Text>
        </View>

      </View>
      <Pressable onPress={() => navigation.navigate('Search')} style={{ backgroundColor: "#0A0", padding: 10 }}>
        <Text>Go to Search Screen</Text>
      </Pressable>
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
    height: 50,
    marginTop: StatusBar.currentHeight,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  icon: {
    width: '11%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f0',
  }

})

export default Results