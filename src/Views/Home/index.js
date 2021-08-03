import React from 'react'
import {
  View, 
  Text,
  StyleSheet,
  StatusBar
} from 'react-native'


function Home() {

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Text style={{ color: "#f00" }}>
        Home Screen
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

export default Home