import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import Home from './src/views/Home'
import Search from './src/views/Search'
import Results from './src/views/Search/Results'
import Song from './src/views/Song'
import Footer from './src/components/Footer'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function MySearchStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='Search'
    >
      <Stack.Screen name='Search' component={Search} />
      <Stack.Screen name='Results' component={Results} />
    </Stack.Navigator>
  )
}

function MyTabBar() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      backBehavior='history'
      tabBar={(props) => <Footer {...props} />}
      screenOptions={{
        headerShown: false,
        keyboardHidesTabBar: true,
        style: {
          position: 'absolute',
        },
      }}
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='MySearchStack' component={MySearchStack} options={{ unmountOnBlur: true }} />
    </Tab.Navigator>
  )
}


function App () {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name='MyTabBar' component={MyTabBar} />
          <Stack.Screen name='Song' component={Song} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff0000"
  }

});

export default App
