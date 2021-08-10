import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { useTrackPlayerProgress } from 'react-native-track-player'
import Slider from '@react-native-community/slider'

import { seekTo } from './player.js'
import { Colors, Poppins } from '../Stylers'


function SliderBar () {
  const { position, duration } = useTrackPlayerProgress()

  const formatTime = (value) => {
    const min = Math.trunc(value / 60);
    const seg = Math.trunc(value % 60);
    const currentText = min + ':' + (seg < 10 ? '0' + seg : seg);
    return currentText;
  }

  return (
    <View style={styles.container}>
      <Slider
        step={0.05}
        value={position}
        minimumValue={0}
        maximumValue={duration}
        style={styles.slider}
        thumbTintColor={Colors.WHITE}
        onSlidingComplete={seekTo}
        tapToSeek={true}
        minimumTrackTintColor={Colors.WHITE}
        maximumTrackTintColor={Colors.GREY_W}
      />
      <View style={styles.duration}>
        <Text style={styles.text}>{formatTime(position)}</Text>
        <Text style={styles.text}>{formatTime(duration)}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 35,
    width: '100%',
    justifyContent: 'center',
  },
  slider: {
    width: '110%',
    left: '-5%', 
    height: 15,
  },
  duration: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: Colors.LIGHT,
    fontFamily: Poppins._300,
    fontSize: 12,
  }
})

export default SliderBar