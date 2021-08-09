import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import Slider from 'react-native-smooth-slider'

import { Colors, Poppins } from '../Stylers'


function SliderBar () {
  return (
    <View style={styles.container}>
      <Slider
        value={50}
        minimumValue={0}
        maximumValue={100}
        thumbTouchSize={{ width: 15, height: 15 }}
        thumbTintColor={Colors.WHITE}
        thumbStyle={{ width: 10, height: 10 }}
        minimumTrackTintColor={Colors.WHITE}
        maximumTrackTintColor={Colors.GREY_W}
        trackStyle={{ height: 3 }}
        style={{ width: '100%', height: 15 }}
      />
      <View style={styles.duration}>
        <Text style={styles.text}>0:00</Text>
        <Text style={styles.text}>4:26</Text>
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