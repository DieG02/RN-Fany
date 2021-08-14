import React, { useEffect, useState } from 'react'
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

const sound = {
  image: 'https://i.ytimg.com/vi/aWmkuH1k7uA/hqdefault.jpg',
  title: 'Nirvana - All Apologies (MTV Unplugged)',
  artist: 'Nirvana',
  duration: 219 // secs.
}

export default function Player() {

  const { image, title, artist, duration } = sound;
  
  const navigation = useNavigation();

  const formatTime = (value) => {
    const min = Math.trunc(value / 60);
    const seg = Math.trunc(value % 60);
    const currentText = min + ':' + (seg < 10 ? '0' + seg : seg);
    return currentText;
  }
  const [favourite, setFavourite] = useState(false);
  const [playing, setPlaying] = useState(false);


  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.song}
        delayPressIn={10}
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate('Song')
        }}
      >
        <Image
          source={{ uri: image }}
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
            ? <AntDesign name="heart" size={20} color="#3a86fc" />
            : <AntDesign name="hearto" size={20} color="#999" />
          }
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={styles.icons}
          onPress={() => {
            setPlaying(!playing)
          }}
        >
          {playing
            ? <Ionicons name='pause' size={28} color='#FFF' />
            : <Ionicons name='play' size={28} color='#FFF' />
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