import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import Home from './src/Views/Home'
import Search from './src/Views/Search'
import Song from './src/Views/Song'
import Footer from './src/Components/Footer'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const { width, height } = Dimensions.get('window');

function MyTabBar() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      backBehavior='history'
      tabBar={(props) => <Footer {...props} />}
      screenOptions={{
        headerShown: false,
      }}
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
            headerShown: false,
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
    width: width,
    height: height,
    backgroundColor: "#ff0000"
  }

});

export default App
