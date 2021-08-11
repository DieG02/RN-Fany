import React, { useState } from 'react'
import {
  View, 
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import MarqueeText from 'react-native-marquee'
import { Colors, Poppins } from '../Stylers'
import AntDesign from 'react-native-vector-icons/AntDesign'


function Data ({ title, artist }) {
  
  const [favourite, setFavourite] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.text}>
          <MarqueeText
            style={styles.title}
            loop
            // duration={title.length * 200}
            duration={75 * 200}
            marqueeOnStart={true}
            marqueeDelay={1750}
            marqueeResetDelay={1250}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry and typesetting industry.
          </MarqueeText>
        </View>
        <View style={styles.text}>
          <Text style={styles.artist}>
            {artist} • Artist
          </Text>
        </View>
      </View>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => setFavourite(!favourite)}
      >
        {favourite
          ? <AntDesign name='heart' size={20} color={Colors.MAIN} />
          : <AntDesign name='hearto' size={20} color={Colors.GREY_W} />
        }
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 55,
    justifyContent: 'space-between',
    marginBottom: 15,
    flexDirection: 'row',
  },
  content: {
    flex: 10,
    justifyContent: 'space-around',
  },
  text: {
    height: '50%',
    width: '100%',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20, 
    color: Colors.WHITE, 
    fontFamily: Poppins._600,
  },
  artist: {
    fontSize: 12,
    color: Colors.GREY_W,
    fontFamily: Poppins._400,
  },

  button: {
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'center',
  }
})

export default Data