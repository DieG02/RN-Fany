import React, { useState } from 'react'
import {
  View, 
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


import { Colors } from '../Stylers'

function Controls () {

  const [isPlaying, setPlaying] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.play}
        onPress={() => setPlaying(!isPlaying)}
      >
        {isPlaying
          ?  <MaterialCommunityIcons name="pause-circle" size={55} color={Colors.WHITE}/>
          :  <MaterialCommunityIcons name="play-circle" size={55} color={Colors.WHITE}/>
        }
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00f',
    marginTop: '3%',
    height: 60,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  play: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: Colors.BLACK
  }
})

export default Controls