import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Pressable
} from 'react-native'


function Search ({ navigation }) {

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'}/>
      <Text>
        Search Screen
      </Text>
      <Pressable onPress={() => navigation.navigate('Results')} style={{backgroundColor: "#00F", padding: 10 }}>
        <Text>Go to Results Screen</Text>
      </Pressable>
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

export default Search