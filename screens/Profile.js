import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Animated,
    ScrollView,
    Image,TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
 
const exploreStack = createStackNavigator({
  explore_home : beforescreen,
  explore_view : loginscreen,
},{
  initialRouteName:"beforescreen",
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
 }
})
