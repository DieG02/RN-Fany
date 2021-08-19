import React, { useState, useEffect, useRef } from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'

import {
  handleOnSubmit
} from './browser'
import { Colors, Poppins } from '../Stylers'
import Times from '../../assets/svg/Times'
import { GOOGLE_API_KEY } from '@env'


function SearchBar({ setResults }) {
  
  const navigation = useNavigation();
  const inputRef = useRef();
  
  const [value, setValue] = useState('');
  const [request, setRequest] = useState({
    base: 'https://youtube.googleapis.com/youtube/v3/search?part=snippet',
    query: '',
    key: `&key=${GOOGLE_API_KEY}`,
    max: '&maxResults=3',
  })


  const handleFocus = () => {
    inputRef.current.focus()
  }
  const handleOnChange = (string) => {
    setValue(string)
    setRequest({ 
      ...request, 
      query: string.replace(/\s+/g, '%20') 
    })
  }




  return (
    <View style={styles.searchBar}>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => navigation.goBack()}
        activeOpacity={0.1}
      >
        <Entypo name="chevron-small-left" size={25} color={Colors.LIGHT} />
      </TouchableOpacity>
      <TextInput
        autoFocus
        ref={inputRef}
        style={styles.input}
        value={value}
        onChangeText={handleOnChange}
        placeholder='Enter name or URL'
        placeholderTextColor={Colors.GREY}
        onSubmitEditing={() => {
          handleOnSubmit(request, setResults);
        }} // --> fetch to API
      />
      <TouchableOpacity
        style={styles.icon}
        onPress={() => {
          handleOnChange('');
          handleFocus();
        }}
        activeOpacity={0.1}
      >
        <Times width='20' height='20' color={Colors.LIGHT} />
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#303030',
    width: '100%',
    height: 50 + StatusBar.currentHeight,
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  input: {
    width: '78%',
    color: Colors.WHITE,
    fontSize: 15,
    height: 50,
    fontFamily: Poppins._400,
    paddingTop: 10,
    paddingLeft: 10,
  },
  icon: {
    width: '11%',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default SearchBar