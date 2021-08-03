import React from 'react'
import {
  View, 
  Text,
  StyleSheet,
  StatusBar
} from 'react-native'


function Home({ navigation }) {
  function FocusAwareStatusBar(props) {
    return navigation.isFocused && <StatusBar {...props} />;
  }

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        translucent={true}
        backgroundColor='transparent'
        barStyle='dark-content'
      />
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