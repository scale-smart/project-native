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

export default class Profile extends React.Component {

    static navigationOptions = ({navigation}) => ({
        header:null,
        headerStyle: {
            backgroundColor: 'black',
            marginTop:-25,
            marginHorizontal:20
          },
      })

  render (){
  return(
    <View style={styles.container}>
         
          <Text style={{fontSize:15,marginTop:80}}> HI! your are not yet logged in</Text>
          <TouchableOpacity style={[styles.customBtnBG,{marginTop:30}]} onPress={() => this.props.navigation.navigate("explore_view")} >            
             <Text style={styles.customBtnText}>LOGIN ! </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.customBtnBG,{marginTop:10}]} onPress={() => this.props.navigation.navigate("explore_view")} >      
          <Text style={styles.customBtnText}>SIGNUP ! </Text>
          </TouchableOpacity>
          <Image style={{marginTop:40,}}
           source={require('../../assets/shark.jpg')}/>
      </View>
  )
}
}
const styles = StyleSheet.create({
container: {
flex: 1,
marginTop:80,
fontSize:30,
alignItems: 'center',
justifyContent: 'center',
},

/* Here, style the text of your button */
customBtnText: {
fontSize: 25,
//marginTop:30,
fontWeight: '200',
color: "#fff",
},

/* Here, style the background of your button */
customBtnBG: {
backgroundColor: "#00aaff",
paddingHorizontal: 30,
paddingVertical: 5,
borderRadius: 30
}
});