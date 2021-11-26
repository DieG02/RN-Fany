import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'


export default function Square({ item }) {
  const [stylers, setStylers] = useState({
    height: 150,
    width: 150,
  })
  const { id: { videoId }, snippet: { title, thumbnails } } = item;

  return (
    <View style={[styles.main, { height: title ? 200 : 150 }]}>
      <TouchableOpacity
        delayPressIn={50}
        activeOpacity={0.5}
        style={{ justifyContent: "space-between", width: "100%", height: "100%" }}
        onPress={() => console.log(videoId)}
        onPressIn={() => setStylers({ height: 144, width: 144, marginTop: 3, marginLeft: 3 })}
        onPressOut={() => setStylers({ height: 150, width: 150, margin: 0 })}
      >
        <Image
          source={{ uri: thumbnails.high.url }}
          style={[{ borderRadius: 10 }, stylers]}
        />
        {title &&
          <View style={styles.content}>
            <Text style={styles.text}>
              {title.slice(0, 70)}
            </Text>
          </View>
        }
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  main: {
    width: 150,
  },
  content: {
    height: 50,
    paddingTop: 3,
  },
  text: {
    color: '#AAA',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12,
  }
})