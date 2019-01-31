import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator,AppConatiner } from 'react-navigation'
import beforescreen from './profilescreens/beforescreen.js'
import LoginScreen  from './profilescreens/loginscreen.js'
import Icon from 'react-native-vector-icons/Ionicons'
export default ProfileStack = createStackNavigator({
  explore_home : beforescreen,
  explore_view : LoginScreen,
},{
  initialRouteName:"explore_home",
  headerMode: 'none',
  mode: 'modal',
  transparentCard: true,
  navigationOptions: {
   headerTintColor: "#a41034",
   headerVisible: true,
   headerTransparent: true,
   tabBarLabel:'PROFILE',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-person" color={tintColor} size={24} />
    )
   // headerStyle: {
   //   backgroundColor: "#fff"
   // },
 },
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

