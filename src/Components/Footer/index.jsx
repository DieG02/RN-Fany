import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

import TabBar from './TabBar'
import Player from './Player'
import { Colors } from '../Stylers'


export default function Footer({ state, descriptors, navigation, title }) {

  const props = { state, descriptors, navigation, title };
  const displayPlayer = useSelector(state => state.app.displayPlayer);

  return (
    <View style={{ ...styles.container, height: displayPlayer ? 120 : 45 }}>
      {displayPlayer && <Player/>}
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


