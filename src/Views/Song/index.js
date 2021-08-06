import React, { useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar
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
  await TrackPlayer.play();
};


function Song() {

  useEffect(() => {
    start();
  }, [])
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Text>
        Song Screen
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

export default Song;