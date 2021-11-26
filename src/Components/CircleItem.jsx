import React from 'react'
import {
  View,
  ImageBackground,
  TouchableHighlight,
  StyleSheet,
} from 'react-native'


export default function Circle({ item, action }) {
  const { src } = item;
  
  return (
    <View style={styles.main}>
      <ImageBackground
        source={{ uri: src }}
        style={styles.container}
        imageStyle={{ borderRadius: 35 }}
      >
        <TouchableHighlight
          style={styles.image}
          delayPressIn={20}
          underlayColor='rgba(75, 75, 75, 0.5)'
          onPress={action}
        >
          <View />
        </TouchableHighlight>
      </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
  main: {
    height: 75,
    width: 75,
    marginRight: 10,
    marginLeft: 10,
  },
  container: {
    height: 70,
    width: 70,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 35,
  }
})