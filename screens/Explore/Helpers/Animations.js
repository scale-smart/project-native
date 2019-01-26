import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
    Animated,
    TouchableOpacity
} from "react-native";

export const scrollY = new Animated.Value(0)

 export let startHeaderHeight = 80
 export let  endHeaderHeight = 50
if (Platform.OS == 'android') {
    startHeaderHeight = 100 + StatusBar.currentHeight
    endHeaderHeight = 70 + StatusBar.currentHeight
}

export const animatedHeaderHeight = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [startHeaderHeight, endHeaderHeight],
    extrapolate: 'clamp'
})

export const animatedOpacity = animatedHeaderHeight.interpolate({
    inputRange: [endHeaderHeight, startHeaderHeight],
    outputRange: [0, 1],
    extrapolate: 'clamp'
})
export const animatedTagTop = animatedHeaderHeight.interpolate({
    inputRange: [endHeaderHeight,startHeaderHeight],
    outputRange: [-30, 10],
    extrapolate: 'clamp'
})
export const animatedMarginTop = animatedHeaderHeight.interpolate({
    inputRange: [endHeaderHeight,startHeaderHeight],
    outputRange: [50, 30],
    extrapolate: 'clamp'
})

