import React, { useContext } from 'react'
import {
  View, 
  Text,
  StatusBar,
  FlatList,
  ScrollView,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import styles from './styles'
import CircleItem from '../../components/CircleItem'
import SquareItem from '../../components/SquareItem'
import SvgHome from '../../assets/svg/Home'
import { SongContext } from '../../context/SongContext'


const colorsGradient = ['#404040', '#101010', '#000'];
const locationsGradient = [0, 0.45, 1];
const aux = 'https://st2.depositphotos.com/5142301/10221/v/600/depositphotos_102218254-stock-illustration-x-letter-colorful-logo.jpg';
const artists = [aux, aux, aux, aux, aux, aux, aux, aux, aux, aux];


function Home({ navigation }) {

  const FocusAwareStatusBar = (props) => {
    return navigation.isFocused && <StatusBar {...props} />
  }
  
  const { song } = useContext(SongContext);


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
        <SvgHome height={120} width={275} style={{ right: '10%', top: '-15%' }} />
        <Text style={styles.title}>Home</Text>
      </View>
      
      <ScrollView 
        style={{ marginBottom: song.url ? 120 : 45 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.artists}>
          <Text style={styles.subtitle}>Top 10 artists</Text>
          <FlatList
            contentContainerStyle={{ alignSelf: 'flex-end' }}
            data={artists}
            renderItem={({ item }) => <CircleItem src={item} />}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.playlists}>
          <Text style={styles.subtitle}>My playlists</Text>
          <FlatList
            contentContainerStyle={{ 
              alignSelf: 'flex-end', 
              paddingHorizontal: 5
            }}
            data={artists}
            renderItem={({ item }) => <SquareItem src={item} />}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  )
}


export default Home