import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { Colors, Poppins } from '../Stylers'
import { asyncLoadSound } from './browser'

function Result(props) {
//         Artist     Image     Name
  const { channelTitle, thumbnails, title, videoId } = props;
  const url = thumbnails.high.url || thumbnails.medium.url || thumbnails.default.url;
  const name = title.replace(/&amp;/g, "&").replace(/&quot;/g, "\"").replace(/&#39;/g, "'");
  let shortName = name.length < 65 ? name : name.slice(0, 65).concat('...')


  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.data}
        delayPressIn={20}
        activeOpacity={0.5}
        onPress={() => { asyncLoadSound(videoId) }}
      >
        <Image
          source={{ uri: url }}
          style={styles.image}
        />
        <View style={{ width: '80%', height: '100%', justifyContent: 'space-around' }}>
          <Text style={[styles.title, { color: Colors.WHITE }]}>{shortName}</Text>
          <Text style={styles.content}>{channelTitle}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.icon}
        activeOpacity={0.2}
        onPress={() => console.log('Add to playlist')}
      >
        <AntDesign name="plus" size={20} color={Colors.GREY} />
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    width: '100%',
    height: 60,
    flexDirection: 'row',
    marginBottom: 15,
  },
  data: {
    height: '100%',
    width: '90%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
    resizeMode: 'cover'
  },
  title: {
    fontSize: 12,
    fontFamily: Poppins._600,
    marginTop: 'auto',
    width: '100%',
  },
  content: {
    color: Colors.GREY,
    fontSize: 11,
    marginBottom: 'auto',
  },
  icon: {
    width: '10%',
    height: 60,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
})


export default Result

