import React from 'react'
import { View, StyleSheet } from 'react-native'

import TabBar from './TabBar'
import { MAIN } from '../Stylers'

export default function Footer({ state, descriptors, navigation, title }) {
  const props = { state, descriptors, navigation, title }

  return (
    <View style={styles.container}>
      <TabBar props={props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: MAIN,
    height: 45,
    justifyContent: 'flex-end',
  }
})


