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
    image = 'data:image/jpeg;base64,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';


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