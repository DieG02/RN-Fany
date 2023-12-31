import React, { useEffect, useState, useContext } from 'react'
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import MarqueeText from 'react-native-marquee'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { State, usePlaybackState } from 'react-native-track-player'
import { setup, addTrack, togglePlayback } from '../../context/controls'

import { SongContext } from '../../context/SongContext'

export default function Player() {

  const { song } = useContext(SongContext);
  const { artwork, title, artist, duration } = song;

  const navigation = useNavigation();
  const playbackState = usePlaybackState();

  let toggleIcon = 'play';

  if (
    playbackState === State.Playing ||
    playbackState === State.Buffering
  ) {
    toggleIcon = 'pause';
  }

  const formatTime = (value) => {
    const min = Math.trunc(value / 60);
    const seg = Math.trunc(value % 60);
    const currentText = min + ':' + (seg < 10 ? '0' + seg : seg);
    return currentText;
  }
  const [favourite, setFavourite] = useState(false);

  useEffect(() => {
    setup();
    addTrack(song)
  }, [song])

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.song}
        delayPressIn={10}
        activeOpacity={0.5}
        onPress={() =>  navigation.navigate('Song')}
      >
        <Image
          source={{ uri: artwork }}
          style={{ width: 75, height: 74 }}
        />

        <View style={styles.textContent}>
          <MarqueeText
            style={styles.title}
            duration={title.length * 200}
            marqueeOnStart={true}
            loop
            marqueeDelay={1500}
            marqueeResetDelay={1000}
          >
            {title}
          </MarqueeText>

          <MarqueeText
            style={styles.content}
            duration={artist.length * 120}
            marqueeOnStart={true}
            loop
            marqueeDelay={1000}
            marqueeResetDelay={750}
          >
            {artist}  •  {duration ? formatTime(duration) : '00:00'}
          </MarqueeText>
        </View>
      </TouchableOpacity>

      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={styles.icons}
          onPress={() => {
            setFavourite(!favourite)
          }}
        >
          {favourite
            ? <AntDesign name='heart' size={20} color='#3a86fc' />
            : <AntDesign name='hearto' size={20} color='#999' />
          }
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={styles.icons}
          onPress={() => togglePlayback(playbackState)}
        >
          {toggleIcon === 'play'
            ? <Ionicons name='play' size={28} color='#FFF' />
            : <Ionicons name='pause' size={28} color='#FFF' />
          }
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 74,
    width: '100%',
    backgroundColor: '#151515',
    marginBottom: 1,
  },
  song: {
    flexDirection: 'row',
    height: '100%',
    width: '75%',
    marginRight: 5,
  },

  textContent: {
    width: '75%',
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  title: {
    width: '100%',
    color: '#EEE',
    fontSize: 13,
    fontWeight: 'bold',
    marginRight: 15,
  },
  content: {
    width: '100%',
    color: '#999',
    fontSize: 11,
    marginRight: 15,
  },

  icons: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
})