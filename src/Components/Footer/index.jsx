import React from 'react'
import { View, StyleSheet } from 'react-native'

import TabBar from './TabBar'
import Player from './Player'
import { Colors } from '../Stylers'

export default function Footer({ state, descriptors, navigation, title }) {
  const props = { state, descriptors, navigation, title }
  let display = false;
  return (
    <View style={{ ...styles.container, height: display ? 120 : 45 }}>
      {display && <Player/>}
      <TabBar props={props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.MAIN,
    justifyContent: 'flex-end',
  }
})


