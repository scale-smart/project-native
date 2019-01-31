import React from "react"
import { StyleSheet, Text, View, Image, Button,TouchableOpacity } from "react-native"
import {Google} from 'expo'

export default class Glogin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      user:{name: "",photoUrl: ""}
    }
  }
  signIn=async()=> {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "514246817350-ga5otd1icpvntb42nrbop2cqlha01nmb.apps.googleusercontent.com",
        //iosClientId: YOUR_CLIENT_ID_HERE,  <-- if you use iOS
        scopes: ["profile", "email"]
      })
      //const user =await result.json();
      if (result.type === "success") {
        
        {this.props.navigation.navigate("explore_view")}
        this.setState({user
          // signedIn: true,
          // name: result.user.name,
          // photoUrl: result.user.photoUrl
        })
      } else {
        console.log("cancelled")
      }
    } catch (e) {
      console.log("error", e)
    }
  }
         
          getuserInfo = () => {
            console.log("hi")
            return (
              // <View style={styles.container}>
              //   <Text style={styles.header}>Welcome:{this.state.user.name}</Text>
              //   <Image style={styles.image} source={{ uri: this.state.user.photoUrl }} />
              // </View>
              <View style={{alignItems:'center'}}>
                  {/* <View style={{backgroundColor:'#f2f2f2',marginLeft:20,width:100,height:100,borderRadius:50}}>
                  <Image 
                  source={{uri:this.state.user.photoUrl}}
                  style={{width:100,height:100,borderRadius:50,borderColor:'red'}}
                  />
              </View> */}
                  <Text style={{fontSize:20}}>{this.state.user.name}</Text>
                  {/* <Text>{this.state.userInfo.phoneNumber}</Text> */}
           </View>
            )
          }

          renderButtonOrLoading() {
          //   if (this.state.loading) {
          //     return <Text> Loading </Text>
          // }
            return (
                <TouchableOpacity onPress={()=>(this.signIn())}>
                  <Image style={{height:40,width:120}}source={require('./images/google.png')} />
                </TouchableOpacity>
            )
          }

        
            render() {
              return (
                <View >
                  <Text>{this.state.error}</Text>
                  {this.renderButtonOrLoading()}
               { !this.state.user ? (<TouchableOpacity onPress={this.signIn().bind(this)} />) : (this.getuserInfo())}
                </View>
              )
        }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 25
  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150
  }
})
