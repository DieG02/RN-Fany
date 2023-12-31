import React, { useState, useEffect, useContext } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

import { SongContext } from '../context/SongContext'
import { SearchContext } from '../context/SearchContext'



export default function Square({ item }) {
  const [stylers, setStylers] = useState({
    height: 150,
    width: 150,
  })
  const newTrack = {
    id: '',
    url: '',
    title: '',
    artist: '',
    artwork: '',
    duration: 0,
  };

  const { id: { videoId }, snippet: { title, thumbnails, channelTitle } } = item;

  const image = thumbnails.high.url || thumbnails.medium.url || thumbnails.default.url;
  const name = title.replace(/&amp;/g, "&").replace(/&quot;/g, "\"").replace(/&#39;/g, "'");
  let shortName = name.length < 65 ? name : name.slice(0, 65).concat('...');

  const [track, setTrack] = useState(newTrack);
  const { setSong } = useContext(SongContext);
  const { getSound } = useContext(SearchContext);

  useEffect(() => {
    async function getResources() {
      setTrack(newTrack)  // reset state
      const { resource, duration } = await getSound(videoId);
      setTrack({
        id: videoId,
        url: resource,
        title: shortName,
        artist: channelTitle,
        artwork: image,
        duration: Math.round(duration / 1000),
      })
    }
    getResources();
  }, [videoId])

  return (
    <View style={[styles.main, { height: title ? 200 : 150 }]}>
      <TouchableOpacity
        delayPressIn={50}
        activeOpacity={0.5}
        style={styles.content}
        disabled={track.url === '' ? true : false}
        onPress={() => setSong(track)}
        onPressIn={() => setStylers({ height: 144, width: 144, marginTop: 3, marginLeft: 3 })}
        onPressOut={() => setStylers({ height: 150, width: 150, margin: 0 })}
      >
        <Image
          source={{ uri: thumbnails.high.url }}
          style={[{ borderRadius: 10 }, stylers]}
        />
        {title &&
          <View style={styles.info}>
            <Text style={styles.text}>
              {title.slice(0, 70)}
            </Text>
          </View>
        }
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  main: {
    width: 150,
  },
  content: { 
    justifyContent: 'space-between',
    width: '100%',
    height: '100%'
  },
  info: {
    height: 50,
    paddingTop: 3,
  },
  text: {
    color: '#AAA',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12,
  }
})