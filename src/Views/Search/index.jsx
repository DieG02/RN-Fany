import React from 'react'
import {
  View,
  Text,
  StatusBar,
  Pressable,
  SafeAreaView,
  Keyboard,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
import styles from './styles'

const colorsGradient = ['#404040', '#343434', '#111111', '#000000'];
const locationsGradient = [0.05, 0.15, 0.3, 0.5];


function Search ({ navigation }) {

  const FocusAwareStatusBar = (props) => {
    const isFocused = navigation.isFocused();
    isFocused && Keyboard.dismiss();
    return isFocused && <StatusBar {...props} />
  }

  return (
    <View style={{ flex: 1 }}>
      <FocusAwareStatusBar 
        translucent={true}
        backgroundColor='transparent'
        barStyle='light-content'
      />
      <LinearGradient
        colors={colorsGradient}
        locations={locationsGradient}
        style={styles.linearGradient}
      />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Search</Text>
        <Pressable 
          onPress={() => navigation.navigate('Results')} 
          style={styles.button}
        >
          <AntDesign name="search1" size={19} color='#444' style={styles.icon} />
          <Text style={styles.content}>Enter name or URL</Text>
        </Pressable>
      </SafeAreaView>
    </View>
  )
}

export default Search