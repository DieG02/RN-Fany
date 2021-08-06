import React, { useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity
} from 'react-native'
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

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle='dark-content' translucent={false} backgroundColor={"#f00"} />
      <SafeAreaView style={styles.container}>
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
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  header: {
    height: 50,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#0f0',
  },
  icon: {
    width: '11%',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Song;