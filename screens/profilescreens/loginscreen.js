import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,ImageBackground,
  Alert,TouchableOpacity
} from 'react-native';

import PropTypes from 'prop-types'; 
import Glogin from './googlebutton.js'
import Fblogin from './facebookbutton.js'
export default class LoginScreen extends Component {


  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  redirecttoprofile = (obj)=>(
    this.props.navigation.navigate("account_details",{
      name:obj.name,
      imguri:obj.picture.data.url
    })
  )

  render() {
    return (

      <View style={styles.container}>
      {/* <ImageBackground style={styles.imagebackground} source={require('./images/wallpaper.png')}> */}
        <Text style={styles.title}>LOGIN / SIGNUP</Text>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('./images/mail.png')}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require('./images/password.png')}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
         </View>
         
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate("account_details")}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <View style={styles.buttonContainer}>
            <TouchableHighlight  onPress={() => this.onClickListener('restore_password')}>
                <Text>Forgot your password?</Text>
            </TouchableHighlight>
            <TouchableHighlight  onPress={() => this.onClickListener('register')}>
                <Text>  Register</Text>
            </TouchableHighlight>
        </View>
        <View style={{marginLeft:125}}>
          <Glogin/>
        </View>
        <View>
          <Fblogin rtop={this.redirecttoprofile}/>
        </View>
        {/* </ImageBackground> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title:{
    marginTop:40,
    marginLeft:135,
    marginBottom:25,
    flexDirection: 'row',
    fontWeight:'bold',
    fontSize:15
  },
  container: {
    flex: 1,
    //marginTop:200,
    //justifyContent: 'center',
    //alignItems: 'center',
    
    backgroundColor: '#fff',
  },
  imagebackground:{
    flex: 1,
    resizeMode: 'cover', // or 'stretch',
    justifyContent: 'center',
  },
  inputContainer: {
      borderColor: '#ff8c1a',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:300,
      height:45,
      marginBottom:10,
      marginHorizontal:35,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#ff8c1a',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    marginTop:5,
    marginHorizontal:80,
    width:200,
    borderRadius:30,
    
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});