import React, { Component } from "react";
import {Google} from 'expo'
import {
    View,
    Text,
    StyleSheet,
    Animated,
    ScrollView,
    Image,TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Econ from 'react-native-vector-icons/Entypo'

import PropTypes from 'prop-types'; 
export default class AfterScreen extends React.Component {

    static navigationOptions = ({navigation}) => ({
        header:null,
        headerStyle: {
            backgroundColor: 'black',
            marginTop:-25,
            marginHorizontal:20
          },
      })
      sendDetails = (na,image)=>(
        this.props.navigation.navigate("editprofile",{
           name:na,
           img:image
        })
      )
  render (){
      console.log(this.props.navigation)
      const na=this.props.navigation.getParam("name")
      const image=this.props.navigation.getParam("imguri")
  return(
    <View>
        <View style={{backgroundColor:'#f2f2f2',flexDirection:'row'}}>
        <TouchableOpacity style={{marginLeft:18,height:30,width:30}} onPress={() => this.props.navigation.navigate("explore_home")} >
                    <Icon name="ios-arrow-back" color="#ff8c1a" size={30} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft:285,height:30,width:30}} onPress={() => this.props.navigation.navigate("account_details")} >
                    <Econ name="share" color="#ff8c1a" size={25} />
        </TouchableOpacity>
        </View>
            <View style={styles.container}>
                    <Text style={styles.name}>{this.props.navigation.getParam("name")}</Text>
                    <View style={{marginRight:10}}>
                    <Image 
                        source={{uri:this.props.navigation.getParam("imguri")}}
                        style={styles.image}
                    />
                    </View>
            </View>
            <View>
                    <TouchableOpacity style={styles.Button} onPress={() => this.sendDetails(na,image)} >
                        <Text>edit</Text>
                    </TouchableOpacity>
            </View>
    </View>
  )
 }
}

  const styles = StyleSheet.create({
    container: {
            //marginTop:10,
            fontSize:30,
            flexDirection:'row',
            alignItems: 'center',
            backgroundColor:'#f2f2f2',
            justifyContent:'space-between'
            },
    name : {
            fontWeight:'bold',
            // justifyContent:'start',
            marginRight:30,
            fontSize:18,
            marginLeft:15
    },
    image : {
            width:80,
            marginRight:5,
            height:80,
            borderRadius:38,
            borderColor:'red',
            backgroundColor:'#f2f2f2'
    },
    Button:{
        fontWeight:'bold',
        marginLeft:290,
        fontSize:17,
        height:23,width:40,
        backgroundColor:'#f2f2f2',
        marginTop:5,
        borderRadius:8,
        justifyContent: 'center',
        alignItems: 'center',
       }
  }
)