import React from 'react'
import { View, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

import Home from './src/Views/Home'
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
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: "#0f0"
  }

});

export default App
