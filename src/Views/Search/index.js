import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Pressable,
  Dimensions,
  SafeAreaView,
  Keyboard,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { Colors, Poppins } from '../Stylers'

const colorsGradient = ['#404040', '#343434', '#111111', '#000000'];
const locationsGradient = [0.05, 0.15, 0.3, 0.5];
const { height } = Dimensions.get('window');


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
        <Text style={styles.subtitle}>History</Text>
        <Text style={styles.auxiliar}>
          You do not have recent searches
        </Text>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20, 
    width: '100%',
  },
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  header: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
  },
  title: {
    color: Colors.WHITE,
    fontSize: height > 720 ? 30 : 27,
    fontFamily: Poppins._600,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '20%',
    marginBottom: '5%',
  },
  button: {
    backgroundColor: Colors.LIGHT,
    height: 38,
    width: '100%',
    borderRadius: 20,
    flexDirection: 'row',
    marginBottom: '8%',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 'auto',
    marginRight: -5,
  },
  content: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#444',
    marginLeft: 15,
    marginRight: 'auto',
  },
  subtitle: {
    fontWeight: 'bold',
    color: Colors.LIGHT,
    fontSize: 20,
    marginTop: 10,
    marginBottom: 30,
  },
  auxiliar: {
    fontWeight: 'bold',
    color: Colors.LIGHT,
    fontSize: 17
  }
})

export default Search