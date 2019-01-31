import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator,createStackNavigator,createAppContainer } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import Explore from './screens/Explore/Explore.js'
import Explore_view from './screens/Explore/View.js'
import Saved from './screens/Saved'
import Inbox from './screens/Inbox'
import Trips from './screens/Trips'
import ProfileStack from './screens/Profile'
 const exploreStack = createStackNavigator({
   explore_home : Explore,
   explore_view : Explore_view
 },{
   initialRouteName:"explore_home",
   //headerMode: 'none',
   //headerMode: 'none',
   mode: 'modal',
   transparentCard: true,
   navigationOptions: {
    headerTintColor: "#a41034",
    headerVisible: true,
    headerTransparent: true,
    
    // headerStyle: {
    //   backgroundColor: "#fff"
    // },
    tabBarLabel: 'EXPLORE',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-search" color={tintColor} size={24} />
    )
  }
 })

 
const tabnav = createBottomTabNavigator({
    Explore:exploreStack,
    Saved:Saved,
    Inbox:Inbox,
    Trips:Trips,
    Profile:ProfileStack
},{
  tabBarOptions: {
    activeTintColor: '#ff8c1a',
    inactiveTintColor: '#8c8c8c',
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset: { width: 5, height: 3 },
      shadowColor: 'black',
      shadowOpacity: 0.5,
      //elevation: 50
    }
  }})
const AppContainer = createAppContainer(tabnav)
export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
