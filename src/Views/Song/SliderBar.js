import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import Slider from 'react-native-smooth-slider'
import TrackPlayer from 'react-native-track-player'

import { seekTo, getDuration } from './player.js'
import { Colors, Poppins } from '../Stylers'


function SliderBar () {
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [value, setValue] = useState(0);
  let max = 100;

  useEffect(() => {
    async function handlerDuration () {
      const res = await TrackPlayer.getDuration();
      max = res;
      const min = Math.trunc(res / 60);
      const seg = Math.trunc(res % 60);
      const currentDuration = min + ':' + (seg < 10 ? '0' + seg : seg);
      console.log(res, currentDuration)
      setDuration(currentDuration)
    }
    handlerDuration()
  }, [])

  useEffect(() => {
    async function handlerPosition () {
      const res = await TrackPlayer.getPosition();

      const min = Math.trunc(res / 60);
      const seg = Math.trunc(res % 60);
      const currentPosition = min + ':' + (seg < 10 ? '0' + seg : seg);
      setPosition(currentPosition);
    }
    handlerPosition()
  })

  return (
    <View style={styles.container}>
      <Slider
        value={value}
        minimumValue={0}
        maximumValue={max}
        thumbTintColor={Colors.WHITE}
        minimumTrackTintColor={Colors.WHITE}
        maximumTrackTintColor={Colors.GREY_W}
        style={{ width: '100%', height: 15 }}
        trackStyle={{ height: 3 }}
        thumbStyle={{ width: 10, height: 10 }}
        thumbTouchSize={{ width: 15, height: 15 }}
        onSlidingComplete={(e) => console.log(e)}
        onValueChange={(e) => console.log(e)}
      />
      <View style={styles.duration}>
        <Text style={styles.text}>{position}</Text>
        <Text style={styles.text}>{duration}</Text>
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