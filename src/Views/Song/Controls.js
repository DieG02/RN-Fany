import React, { useState } from 'react'
import {
  View, 
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { Colors } from '../Stylers'

function Controls () {

  const [isPlaying, setPlaying] = useState(true);
  const [isSaved, setSave] = useState(false);
  const [index, setIndex] = useState(0)

  const loop = [
    { icon: 'reply', color: Colors.LIGHT, action: () => setIndex(1) },
    { icon: 'reply', color: Colors.MAIN, action: () => setIndex(2) },
    { icon: 'reply-all', color: Colors.MAIN, action: () => setIndex(0) }
  ]

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={[styles.icons, { alignItems: 'flex-start' }]}
        onPress={() => setSave(!isSaved)}
      >
        {isSaved
          ? <Ionicons name='bookmark' size={24} color={Colors.LIGHT} />
          : <Ionicons name='bookmark-outline' size={24} color={Colors.LIGHT} />
        }
      </TouchableOpacity>
      <View style={styles.mainControllers}>
        <TouchableOpacity
          style={styles.icons}
          onPress={() => console.log('Do something')}
        >
          <Ionicons name='play-skip-back' size={24} color={Colors.LIGHT} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.play}
          onPress={() => setPlaying(!isPlaying)}
        >
          {isPlaying
            ?  <MaterialCommunityIcons name='pause-circle' size={55} color={Colors.WHITE}/>
            :  <MaterialCommunityIcons name='play-circle' size={55} color={Colors.WHITE}/>
          }
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icons}
          onPress={() => console.log('Do something')}
        >
          <Ionicons name='play-skip-forward' size={24} color={Colors.LIGHT} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[styles.icons, { alignItems: 'flex-end' }]}
        onPress={loop[index].action}
      >
        <FontAwesome 
          name={loop[index].icon} 
          size={24} 
          color={loop[index].color} 
        />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: '3%',
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