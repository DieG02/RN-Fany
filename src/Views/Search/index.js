import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native';


function Search() {

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Text>
        Search Screen
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

export default Search;