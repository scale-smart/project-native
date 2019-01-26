import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Animated,
    Platform,
    TextInput
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import * as anim from './Helpers/Animations.js'
import Tag from '../components/Explore/Tag'
export default class Animated_Header extends React.Component {

    render() {
        return (
            <Animated.View style={{ height: anim.animatedHeaderHeight, backgroundColor: 'yellow', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                <View style={{
                    flexDirection: 'row', padding: 10,
                    backgroundColor: 'black', marginHorizontal: 20,
                    shadowOffset: { width: 0, height: 0 },
                    shadowColor: 'black',
                    shadowOpacity: 0.2,
                    elevation: 1,
                    marginTop: Platform.OS == 'android' ? 30 : null
                }}>
                    <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
                    <TextInput
                        underlineColorAndroid="transparent"
                        placeholder="Try New Delhi"
                        placeholderTextColor="grey"
                        style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }}
                    />
                    {/* <TouchableOpacity onPress ={()=>{this.getlocation()}}>
                    <Text style={{fontsize:10,fontWidth:10,color:'blue'}}>get my address</Text>
                    </TouchableOpacity> */}
                </View>

                <Animated.View
                    style={{ flexDirection: 'row', marginHorizontal: 20, position: 'relative', top: anim.animatedTagTop, opacity: anim.animatedOpacity }}
                >
                    <Tag name="Guests" />
                    <Tag name="Dates" />

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