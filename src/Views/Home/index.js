import React from 'react'
import {
  View, 
  Text,
  StyleSheet,
  StatusBar
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const colorsGradient = ['#404040', '#303030', '#1F1F1F', '#0F0F0F', '#000'];
const locationsGradient = [0, 0.2, 0.45, 0.8, 1];

function Home({ navigation }) {
  function FocusAwareStatusBar(props) {
    return navigation.isFocused && <StatusBar {...props} />
  }

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        translucent={true}
        backgroundColor='transparent'
        barStyle='dark-content'
      />
      <LinearGradient 
        colors={colorsGradient}
        locations={locationsGradient}
        style={styles.linearGradient} 
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
  },

  linearGradient: {  
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
})

export default Home