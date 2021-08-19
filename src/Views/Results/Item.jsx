import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { connect } from 'react-redux'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

import { asyncFetchSound, asyncLoadSound } from './browser'
import { Colors, Poppins } from '../Stylers'
import * as Actions from '../../redux/app/actions'


const newTrack = {
  id: '',
  url: '',
  title: '',
  artist: '',
  artwork: '',
  duration: 0,
};

const formatTime = (value) => {
  const min = Math.trunc(value / 60);
  const seg = Math.trunc(value % 60);
  const currentText = min + ':' + (seg < 10 ? '0' + seg : seg);
  return currentText;
}

function Result(props) {
  //         Artist        Image     Name     Id
  const { channelTitle, thumbnails, title, videoId } = props;
  const image = thumbnails.high.url || thumbnails.medium.url || thumbnails.default.url;
  const name = title.replace(/&amp;/g, "&").replace(/&quot;/g, "\"").replace(/&#39;/g, "'");
  let shortName = name.length < 65 ? name : name.slice(0, 65).concat('...');

  const [track, setTrack] = useState(newTrack);
  const navigation = useNavigation();

  const { showPlayer } = props;

  useEffect(() => {
    async function getResources() {
      setTrack(newTrack)  // reset state

      const { resource, duration } = await asyncFetchSound(videoId);
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
    <View style={styles.container}>
      <TouchableOpacity
        disabled={track.url === '' ? true : false}
        style={styles.data}
        delayPressIn={20}
        activeOpacity={0.5}
        onPress={() => {
          console.log(track)
          showPlayer(track);
          // navigation.navigate('Song', { track });
        }}
      >
        <Image
          source={{ uri: image }}
          style={styles.image}
        />
        <View style={{ width: '80%', height: '100%', justifyContent: 'space-around' }}>
          <Text style={[styles.title, { color: Colors.WHITE }]}>{shortName}</Text>
          <Text style={styles.content}>{channelTitle}  •  {formatTime(track.duration)}</Text>
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


// export default Result

const mapStateToProps = null;
const mapDispatchToProps = dispatch => ({
  showPlayer: payload => dispatch(Actions.showPlayer(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Result);


