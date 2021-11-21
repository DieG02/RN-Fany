import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'

import TabBar from './TabBar'
import Player from './Player'
import { Colors } from '../Stylers'
import { SongContext } from '../../context/SongContext'


function Footer(props) {
  
  const { state, descriptors, navigation, title } = props;
  const tabBarOptions = { state, descriptors, navigation, title };

  const { song } = useContext(SongContext);
  
  return (
    <View style={{ ...styles.container, height: song.url ? 120 : 45 }}>
      {song.url &&
        <Player track={song}/>
      }
      <TabBar props={tabBarOptions} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.MAIN,
    justifyContent: 'flex-end',
  }
})

export default Footer;




