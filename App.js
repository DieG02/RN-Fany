/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { View, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

import Home from './src/Views/Home/index.jsx'
import Search from './src/Views/Search'
import Song from './src/Views/Song'
import Footer from './src/Components/Footer'


function MyTabBar() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      backBehavior='history'
      tabBar={(props) => <Footer {...props} />}
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Search' component={Search} />
    </Tab.Navigator>
  )
}

function App () {
  return (
    <View style={styles.container}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='MyTabBar' component={MyTabBar} />
        <Stack.Screen name='Song' component={Song} />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }

});

export default App
