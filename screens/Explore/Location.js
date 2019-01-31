import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    StatusBar,
    ToastAndroid
} from "react-native";
import {Location} from 'expo';
import Icon from 'react-native-vector-icons/Ionicons'
import Dash from 'react-native-dash'
//import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
class Location_Search extends Component {
    state = {
        address:"waiting for the address",
        suggestions:null
    }
    static navigationOptions = ({navigation}) => ({
       header:null
      })

    // componentWillMount(){
    //     this._getAddressAsync()
    // }

    // _getAddressAsync = async () => {
    //     const address = await Location.reverseGeocodeAsync(this.props.navigation.getParam('coords'))
    //     console.log(address)
    //     this.setState({address})
    //     }

    handletextchange = async(text) => {
        try{
            if(!text.length)
                this.setState({suggestions:null})
            if(text.length>0 ){
                const suggestions_response = await fetch("https://geocoder.api.here.com/6.2/geocode.json?app_id=5Gs4xwlu4BvbePYLpADt&app_code=ec_Gdv6WR9XJVE9CK0GLwQ&searchtext="+text)
                const suggestions = await suggestions_response.json()
                console.log(suggestions.Response.View[0].Result.length)
                this.setState({suggestions:suggestions.Response.View[0].Result})
            }
        }catch(err){
            console.log(err)
        }

    }

    render() {
        console.log(this.props.navigation.getParam("cat_data"))
        return (
            <View style={{backgroundColor:"white",flex:1}}>
                <View>
                <Icon name="ios-arrow-back" size={25} style={{ marginLeft: 10,marginTop:1 }} />
                </View>
                <View style={{marginTop:5,flexDirection:"row",borderRadius:10,backgroundColor:"white",
                marginHorizontal:5,borderColor:'#ffdd99',borderBottomWidth:1,borderOpacity:0.5,alignItems: 'center',}}>
                    <Icon name="ios-search" size={25} style={{ marginLeft: 10,marginTop:1 }} />
                    <TextInput
                        //underlineColorAndroid="transparent"
                        //backgroundColor="green"
                        placeholder="Search Location"
                        placeholderTextColor="#c2c2a3"
                        style={{ flex:1,fontWeight: '700',fontSize:15, backgroundColor: 'white',marginLeft:10,height:35 }}
                        onChangeText = {(this.handletextchange)}
                        // onFocus = {() => (this.props.navtoloc(this.props.loc))}
                    />
                </View>
                
                <View style={{marginTop:10}}>
                {this.state.suggestions && this.state.suggestions.map((loc,ind) => <Text style={styles.suggestion} key={ind}>{loc.Location.Address.Label}</Text>)}
                    {/* <Text>search for the location...!!</Text>
                    <Text>{this.props.navigation.getParam('loc').coords.latitude}</Text>
                    <Text>{this.props.navigation.getParam('loc').coords.longitude}</Text>
                    <Text>{this.props.navigation.getParam("loclabel")}</Text> */}
 
                </View>
             </View>

        );
    }
}
export default Location_Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    suggestion:{
        height:40,
        color:'#ff8c1a',
        paddingLeft: 10,
        paddingTop:5,
        borderBottomWidth:1,
        margin:2,
        borderColor:"#c2c2a3",
        textDecorationLine: 'underline'
    }
});