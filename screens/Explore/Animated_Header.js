import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Animated,
    Platform,
    TextInput,
    TouchableOpacity
} from "react-native";
import Dash from 'react-native-dash'

import * as anim from './Helpers/Animations.js'
import Tag from '../components/Explore/Tag'
export default class Animated_Header extends React.Component {

    render() {
        return (
            <Animated.View style={{ height: 75, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                <View style={{
                    flexDirection: 'row', padding: 10,
                    backgroundColor: '#f2f2f2',
                    shadowOffset: { width: 0, height: 0 },
                    shadowColor: 'black',
                    shadowOpacity: 0.2,
                    elevation: 1,
                    alignItems:"center",
                    //marginTop: Platform.OS == 'android' ? 30 : null,
                    
                    height:75
                }}>
                <TouchableOpacity 
                    style={{flex:1}} 
                    onPress = {() => (this.props.navtoloc({
                        loc:this.props.loc,
                        loclabel:this.props.loclabel
                    }))}
                >
                <Text style={{fontSize:10}}>YOUR LOCATION</Text>

                    <Text style={{fontSize:17,flex:1}}>{this.props.loclabel}</Text>
                    
                </TouchableOpacity>
                
                </View>

                <Animated.View
                    style={{ flexDirection: 'row', marginHorizontal: 20, position: 'relative', top: anim.animatedTagTop, opacity: anim.animatedOpacity }}
                >



                </Animated.View>

            </Animated.View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});