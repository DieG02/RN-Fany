import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Pressable,
} from 'react-native'


function Results ({ navigation }) {

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Text>
        Results Screen
      </Text>
      <Pressable onPress={() => navigation.navigate('Search')} style={{ backgroundColor: "#0A0", padding: 10 }}>
        <Text>Go to Search Screen</Text>
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

export default Results