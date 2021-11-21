import React from 'react'
import {
  View, 
  Text,
  StatusBar,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { useSelector } from 'react-redux'

import styles from './styles'
import CircleItem from './CircleItem'
import SquareItem from './SquareItem'
import SvgHome from '../../assets/svg/Home'


// const colorsGradient = ['#404040', '#303030', '#1F1F1F', '#0F0F0F', '#000'], 
//       locationsGradient = [0, 0.2, 0.45, 0.8, 1];
const colorsGradient = ['#404040', '#101010', '#000'];
const locationsGradient = [0, 0.45, 1];
const aux = 'https://st2.depositphotos.com/5142301/10221/v/600/depositphotos_102218254-stock-illustration-x-letter-colorful-logo.jpg';
const artists = [aux, aux, aux, aux, aux, aux, aux, aux, aux, aux];


function Home({ navigation }) {

  const FocusAwareStatusBar = (props) => {
    return navigation.isFocused && <StatusBar {...props} />
  }
  const RenderCircle = ({ item }) => {
    return <CircleItem src={item}/>
  }
  const RenderSquare = ({ item }) => {
    return <SquareItem src={item}/>
  }

  const displayPlayer = useSelector(state => state.app.displayPlayer) 


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
        style={{ marginBottom: displayPlayer ? 120 : 45 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.artists}>
          <Text style={styles.subtitle}>Top 10 artists</Text>
          <FlatList
            contentContainerStyle={{ alignSelf: 'flex-end' }}
            data={artists}
            renderItem={RenderCircle}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.recents}>
          <Text style={styles.subtitle}>Recents</Text>
          <FlatList
            contentContainerStyle={{ 
              alignSelf: 'flex-end', 
              paddingHorizontal: 5
            }}
            data={artists}
            renderItem={RenderSquare}
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
            renderItem={RenderSquare}
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