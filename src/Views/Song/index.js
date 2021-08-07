import React, { useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import TrackPlayer from 'react-native-track-player'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Controls from './Controls'
import { Colors } from '../Stylers'

const start = async () => {
  // Set up the player
  await TrackPlayer.setupPlayer();
  const url = 'https://drive.google.com/uc?id=1AjPwylDJgR8DOnmJWeRgZzjsohi-7ekj';
  const artwork = '../../assets/TMP/Rolling in the deep.jpg';
  const track3 = {
    id: 'trialTrack01',
    url: { uri: url },
    title: 'Title from song',
    artist: 'Some artist',
    artwork: artwork,
  };
  await TrackPlayer.add([track3]);
  // Start playing it
  // await TrackPlayer.play();
};


function Song({ navigation }) {

  // useEffect(() => {
  //   start();
  // }, [])
  const colorsGradient = ['transparent', '#151515', '#000'],
        locationsGradient = [0.6, 0.85, 0.95],
        image = 'https://i.ytimg.com/vi/24C8r8JupYY/maxresdefault.jpg';


  return (
    <View style={styles.body}>
      <StatusBar 
        barStyle='light-content' 
        translucent={true} 
      />
      <ImageBackground 
        source={{ uri: image }} 
        blurRadius={15} 
        style={styles.imageBackground} 
      />
      <LinearGradient 
        colors={colorsGradient} 
        locations={locationsGradient} 
        style={styles.background} 
      />

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => console.log('Back')}
        >
          <Entypo name="chevron-small-left" size={25} color={Colors.WHITE} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate('Example')}
        >
          <Ionicons name="menu-outline" size={24} color={Colors.WHITE} />
        </TouchableOpacity>
      </View>

      <SafeAreaView style={styles.container}>
        <Controls />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
  },
  imageBackground: {
    position: 'absolute',
    top: '-10%',
    bottom: 0,
    left: 0,
    right: 0,
    resizeMode: 'stretch',
    transform: [{ rotate: '180deg' }],
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },

  header: {
    height: 45,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    top: StatusBar.currentHeight,
    paddingHorizontal: 5,
  },
  icon: {
    width: 50,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
      width: '100%',
      paddingHorizontal: 25,
      height: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'space-around',
  }
})

export default Song;