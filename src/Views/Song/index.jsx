import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native';


function Song() {

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Text>
        Song Screen
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Song;