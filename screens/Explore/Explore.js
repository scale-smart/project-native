import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
    Animated,
} from "react-native";

import * as anim from './Helpers/Animations.js'
import H_Scroll from './Horizontal_Scroll.js'
import Homes_Around from './Homes_Around.js'
import Animated_Header from './Animated_Header.js'
const { height, width } = Dimensions.get('window')
class Explore extends Component {

    static navigationOptions = ({navigation}) => ({
        headerTitle:"Airbnb",
        headerStyle: {
            backgroundColor: '#ff8c1a',
            marginTop:-25,
            marginHorizontal:20
          },
      })

    
    navToView = (props) => (this.props.navigation.navigate("explore_view",props))
    render() {
        return (
            <View style={{ flex: 1 ,backgroundColor:"white"}}>
                <View style={{ flex: 1 }}>
                    <Animated_Header />
                    <ScrollView
                            scrollEventThrottle={16}
                            onScroll={Animated.event(
                                [
                                    { nativeEvent: { contentOffset: { y: anim.scrollY } } }
                                ]
                            )}>
                            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                    What can we help you find, kishore?
                                </Text>

                                <View style={{ height: 130, marginTop: 20 }}>
                                <H_Scroll navtoview={this.navToView}/>
                                </View>
                            </View>    
                            <Homes_Around navtoview={this.navToView}/>
                    </ScrollView>
                </View>
            </View>
        );
    }
    }
export default Explore;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});