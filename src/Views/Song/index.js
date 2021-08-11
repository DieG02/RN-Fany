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
import TrackPlayer, { Event, useTrackPlayerEvents } from 'react-native-track-player'
import Entypo from 'react-native-vector-icons/Entypo'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import {
  setup,
  togglePlayback,
  skipToPrevious,
  skipToNext,
} from './player.js'
import Data from './Data'
import Controls from './Controls'
import SliderBar from './SliderBar'
import styles from './styles'
import { Colors } from '../Stylers'


const image = 'https://i.ytimg.com/vi/24C8r8JupYY/hqdefault.jpg';
const colorsGradient = ['transparent', '#151515', '#000'],
      locationsGradient = [0.6, 0.85, 0.95];

function Song({ navigation }) {
  
  const [trackTitle, setTrackTitle] = useState('');
  const [trackArtwork, setTrackArtwork] = useState();
  const [trackArtist, setTrackArtist] = useState('');


  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (event.type === Event.PlaybackTrackChanged && event.nextTrack != null) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const { title, artist, artwork } = track || {};
      setTrackTitle(title);
      setTrackArtist(artist);
      setTrackArtwork(artwork);
    }
  });

  useEffect(() => {
    setup();
    // togglePlayback(); // -->> Uncomment to auto init
  }, []);

 

  return (
    <View style={styles.body}>
      <StatusBar barStyle='light-content' translucent={true} />
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
          onPress={() => navigation.goBack()}
        >
          <Entypo name="chevron-small-left" size={25} color={Colors.WHITE} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => console.log('Display Menu')}
        >
          <SimpleLineIcons name="menu" size={19} color={Colors.WHITE} />
        </TouchableOpacity>
      </View>

      <SafeAreaView style={styles.container}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.options}>
          <Data
            title={trackTitle}
            artist={trackArtist}
          />
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

export default Song