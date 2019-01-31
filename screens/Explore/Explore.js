import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
    Animated,
    TextInput,
    TouchableOpacity
} from "react-native";
import { Constants, Location, Permissions } from 'expo';
import * as anim from './Helpers/Animations.js'
import H_Scroll from './Horizontal_Scroll.js'
import Homes_Around from './Homes_Around.js'
import Animated_Header from './Animated_Header.js'
import { Font } from 'expo';
import Icon from 'react-native-vector-icons/Ionicons'
const { height, width } = Dimensions.get('window')
class Explore extends Component {
    state = {
        location:null,
        errorMessage:null,
        loclabel:null,
        fontLoaded:false
    }
    static navigationOptions = ({navigation}) => ({
        headerTitle:"Airbnb",
        header:null,
        headerStyle: {
            backgroundColor: '#ff8c1a',
            marginTop:-25,
            marginHorizontal:20
          },
      })

    //sendDataToSaved = (obj) => {this.props.navigation.setParams({ cat_data: obj })}
    navToView = (props) => (this.props.navigation.navigate("explore_view",props))

    navToLoc = (props) => (this.props.navigation.navigate("explore_location",props))

    componentWillMount(){
        this._getfontAsync();
        this._getLocationAsync();
    }

    _getfontAsync = async() => {
        await Font.loadAsync({
            'sea-gardens': require('../../assets/fonts/sea-gardens/SEA_GARDENS.ttf'),
          });
          this.setState({ fontLoaded: true });
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            errorMessage: 'Permission to access location was denied',
          });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location });
        const latitude = this.state.location.coords.latitude
        const longitude = this.state.location.coords.longitude
        const loc = await fetch("https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?prox="+latitude+"%2C"+longitude+"%2C250&mode=retrieveAddresses&maxresults=1&app_id=5Gs4xwlu4BvbePYLpADt&app_code=ec_Gdv6WR9XJVE9CK0GLwQ")
        const locdata = await loc.json()
        const loclabel = locdata.Response.View[0].Result[0].Location.Address.Label
        console.log(locdata.Response.View[0].Result[0].Location.Address.Label)
        this.setState({loclabel})
        
      };


    render() {
        if(!this.state.loclabel || !this.state.fontLoaded) return <View/>
        console.log(this.state.location)
       
        return (
            <View style={{ flex: 1 ,backgroundColor:"white"}}>
                <View style={{ flex: 1,backgroundColor:"#f5f5f0" }}>
                    <Animated_Header navtoloc = {this.navToLoc} loc={this.state.location} loclabel={this.state.loclabel}/>
                    {/* <Text>{this.state.loclabel}</Text> */}
                    <ScrollView
                            scrollEventThrottle={16}
                            onScroll={Animated.event(
                                [
                                    { nativeEvent: { contentOffset: { y: anim.scrollY } } }
                                ]
                            )}>
                            <View style={{alignItems:"center",flexDirection:"row",margin:12,backgroundColor:'#d6d6c2',height:40,borderRadius:10}}>
                            <Icon name="ios-search" size={20} style={{marginLeft:10}} /> 
                                <TextInput
                                    underlineColorAndroid="transparent"
                                    placeholder="Search for Rooms,Restaurants.."
                                    placeholderTextColor="grey"
                                    style={{ flex: 1, height:25,fontWeight: '700',fontSize:15, backgroundColor: '#d6d6c2',marginLeft:10 }}
                                    onFocus = {() => (this.props.navtoloc(this.props.loc))}
                                /> 
                            </View>
                            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 10 }}>
                            <View style={{flexDirection:"row",marginTop:7,marginBottom:7}}>
                                <Text style={{ fontSize: 20, marginHorizontal: 20,fontFamily: 'sea-gardens',color:'#ff8c1a'}}>
                                    FEATURED TYPES
                                </Text>
                                <TouchableOpacity style={{backgroundColor:"white",alignItems:"center"
                                , marginLeft:70,height:25,width:70}}>
                                <Text style={{ fontSize: 15,color: '#ff8c1a'}}>
                                    See All
                                </Text>
                                </TouchableOpacity>
                            </View>
                                <View style={{ height: 200, marginTop: 10 }}>
                                <H_Scroll navtoview={this.navToView}/>
                                </View>
                            </View>    
                            {/* <Homes_Around navtoview={this.navToView}/> */}
                            <View style={{backgroundColor:"#ffffff" ,marginTop:5,height:500}}>
                                <Text style={{ fontSize: 20, paddingLeft:20,marginTop:17,fontFamily: 'sea-gardens',color:'#ff8c1a'}}>
                                    TRENDING
                                </Text>
                                <View style={{height:400,backgroundColor:"#f5f5f0",marginTop:20,flex:1}}>
                                     <View style={{backgroundColor:"#f5f5f0",marginHorizontal:4,marginTop:4,flexDirection:"row",marginBottom:2,flex:1}}>
                                        <View style={{flex:1,marginRight:2,backgroundColor:"#ffffff"}}>
                                            
                                        </View> 
                                        <View style={{flex:1,marginLeft:2,backgroundColor:"#ffffff"}}>

                                        </View> 
                                    </View>
                                    <View style={{backgroundColor:"#f5f5f0",marginHorizontal:4,marginBottom:4,flexDirection:"row",marginTop:2,flex:1}}>
                                        <View style={{flex:1,marginRight:2,backgroundColor:"#ffffff"}}>
                                            
                                        </View> 
                                        <View style={{flex:1,marginLeft:2,backgroundColor:"#ffffff"}}>

                                        </View> 
                                    </View>
                                   

                                </View>
                            </View>
                                


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