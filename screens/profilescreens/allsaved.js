import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Icon from 'react-native-vector-icons/Octicons'
export default class Allsaved extends React.Component {


componentDidMount=()=>{
    setTimeout(()=>{
     //console.log(this.props.obj)
     console.log("hello")
      this.props.rd(this.props.obj)
        }, 1000)
    }


    render() {
        return (
            <View style={styles.container}>
                <Icon name="thumbsup" color="#00b300" size={50} />
                <Text style={{fontSize:40}}>saved</Text>
            </View>
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