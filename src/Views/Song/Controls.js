import React, { useState } from 'react'
import {
  View, 
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from 'react-native'
import TrackPlayer, { usePlaybackState } from 'react-native-track-player'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { Colors } from '../Stylers'


function Controls({ onNext, onPrevious, onTogglePlayback }) {
  
  const playbackState = usePlaybackState();

  const [isPlaying, setPlaying] = useState(true);
  const [isSaved, setSave] = useState(false);
  const [index, setIndex] = useState(0)

  const loop = [
    { icon: 'reply', color: Colors.LIGHT, action: () => setIndex(1) },
    { icon: 'reply', color: Colors.MAIN, action: () => setIndex(2) },
    { icon: 'reply-all', color: Colors.MAIN, action: () => setIndex(0) }
  ]

  let middleButtonText = 'Play';

  if (
    playbackState === TrackPlayer.STATE_PLAYING ||
    playbackState === TrackPlayer.STATE_BUFFERING
  ) {
    middleButtonText = 'Pause';
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={[styles.icons, { alignItems: 'flex-start' }]}
        onPress={() => setSave(!isSaved)}
      >
        {isSaved
          ?  <Ionicons  name='bookmark' size={20}  color={Colors.LIGHT} />
          :  <Ionicons  name='bookmark-outline' size={20}  color={Colors.LIGHT} />
        }
      </TouchableOpacity>
      <View style={styles.mainControllers}>
        <TouchableOpacity
          style={styles.icons}
          onPress={onPrevious}
        >
          <Ionicons name='play-skip-back' size={25} color={Colors.LIGHT} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.play}
          onPress={() => {
            setPlaying(!isPlaying)
            onTogglePlayback(playbackState)
          }}
        >
          {middleButtonText === 'Play'
            ? <MaterialCommunityIcons name='play-circle' size={60} color={Colors.WHITE}/>
            : <MaterialCommunityIcons name='pause-circle' size={60} color={Colors.WHITE}/>
          }
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icons}
          onPress={onNext}
        >
          <Ionicons name='play-skip-forward' size={25} color={Colors.LIGHT} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[styles.icons, { alignItems: 'flex-end' }]}
        onPress={loop[index].action}
      >
        <FontAwesome 
          name={loop[index].icon} 
          size={19} 
          color={loop[index].color} 
        />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  mainControllers: {
    width: '60%',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  play: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  icons: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Controls