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

  

// const load = async () => {
//   const state = await TrackPlayer.getState();
//   if (state === Current.Playing) {
//     console.log('The player is playing');
//   };

//   let trackIndex = await TrackPlayer.getCurrentTrack();
//   let trackObject = await TrackPlayer.getTrack(trackIndex);
//   console.log(`Title: ${trackObject.title}`);

//   const position = await TrackPlayer.getPosition();
//   const duration = await TrackPlayer.getDuration();
//   console.log(`${duration - position} seconds left.`);
// }

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


function Song() {

  useEffect(() => {
    start();
  }, [])
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
          <Text>{`<`}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => console.log('Menu')}
        >
          <Text>{`=`}</Text>
        </TouchableOpacity>
      </View>

      <SafeAreaView style={styles.container}>
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
    height: 50,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#0f0',
    top: StatusBar.currentHeight,
  },
  icon: {
    width: '11%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '85%',
    height: '92%',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'space-around',
  }
})

export default Song;