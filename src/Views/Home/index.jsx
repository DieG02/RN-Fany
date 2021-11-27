import React, { useState, useContext } from 'react'
import {
  View, 
  Text,
  StatusBar,
  FlatList,
  ScrollView,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import styles from './styles'
import data from './data.json';
import CircleItem from '../../components/CircleItem'
import SquareItem from '../../components/SquareItem'
import SvgHome from '../../assets/svg/Home'
import { SongContext } from '../../context/SongContext'


const colorsGradient = ['#404040', '#101010', '#000'];
const locationsGradient = [0, 0.45, 1];
const aux = 'https://st2.depositphotos.com/5142301/10221/v/600/depositphotos_102218254-stock-illustration-x-letter-colorful-logo.jpg';


function Home({ navigation }) {

  const FocusAwareStatusBar = (props) => {
    return navigation.isFocused && <StatusBar {...props} />
  }
  const { song } = useContext(SongContext);
  const [artist, setArtist] = useState(data[0]); 
  
  return (
    <View style={{ flex: 1 }}>
      <FocusAwareStatusBar
        translucent={true}
        backgroundColor='transparent'
        barStyle='light-content'
      />
      <LinearGradient 
        colors={colorsGradient}
        locations={locationsGradient}
        style={styles.linearGradient} 
      />

      <View style={styles.header}>
        <SvgHome 
          height={120} 
          width={275} 
          style={{ right: '10%', top: '-15%' }} 
        />
        <Text style={styles.title}>Home</Text>
      </View>
      
      <ScrollView 
        style={{ marginBottom: song.url ? 120 : 45 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.artists}>
          <Text style={[{ marginLeft: 20 }, styles.subtitle]}>Top artists</Text>
          <FlatList
            style={{ marginLeft: 10}}
            contentContainerStyle={{ alignSelf: 'flex-end', paddingRight: 10 }}
            data={data}
            renderItem={({ item }) => <CircleItem item={item} action={() => setArtist(item)} />}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.playlists}>
          <Text style={styles.subtitle}>{artist.nickName}</Text>
          {artist.items.map((item) => <SquareItem item={item} />)}
        </View>
      </ScrollView>
    </View>
  )
}

export default Home