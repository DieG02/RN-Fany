import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import TrackPlayer, {
  usePlaybackState,
  useTrackPlayerEvents,
} from 'react-native-track-player'
import Entypo from 'react-native-vector-icons/Entypo'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import {
  setup,
  togglePlayback,
  skipToPrevious,
  skipToNext,
} from './player.js'
import Controls from './Controls'
import SliderBar from './SliderBar'
import styles from './styles'
import { Colors } from '../Stylers'


const image = 'https://i.ytimg.com/vi/24C8r8JupYY/hqdefault.jpg';
const colorsGradient = ['transparent', '#151515', '#000'],
      locationsGradient = [0.6, 0.85, 0.95];

function Song({ navigation }) {
  
  const playbackState = usePlaybackState();
  const [trackTitle, setTrackTitle] = useState('');
  const [trackArtwork, setTrackArtwork] = useState();
  const [trackArtist, setTrackArtist] = useState('');
  useTrackPlayerEvents(['playback-track-changed'], async event => {
    if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      console.log(track)
      const { title, artist, artwork } = track || {};
      setTrackTitle(title);
      setTrackArtist(artist);
      setTrackArtwork(artwork);
    }
  });

  useEffect(() => {
    setup();
  }, []);

  return (
    <View style={styles.body}>
      <StatusBar barStyle='light-content'  translucent={true} />
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
          <SimpleLineIcons name="menu" size={19} color={Colors.WHITE} />
        </TouchableOpacity>
      </View>

      <SafeAreaView style={styles.container}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.options}>
          <Text>{trackTitle}</Text>
          <Text>{trackArtwork}</Text>
          <Text>{trackArtist}</Text>
          <SliderBar />
          <Controls 
            onNext={skipToNext}
            onPrevious={skipToPrevious}
            onTogglePlayback={togglePlayback}
          />
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Song;