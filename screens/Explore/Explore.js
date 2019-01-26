import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
    Animated,
    TouchableOpacity
} from "react-native";
import Geocoder from 'react-native-geocoding';
import Icon from 'react-native-vector-icons/Ionicons'
import Category from '../components/Explore/Category'
import Home from '../components/Explore/Home'
import Tag from '../components/Explore/Tag'
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

    componentWillMount() {

        this.scrollY = new Animated.Value(0)

        this.startHeaderHeight = 80
        this.endHeaderHeight = 50
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
            this.endHeaderHeight = 70 + StatusBar.currentHeight
        }

        this.animatedHeaderHeight = this.scrollY.interpolate({
            inputRange: [0, 50],
            outputRange: [this.startHeaderHeight, this.endHeaderHeight],
            extrapolate: 'clamp'
        })

        this.animatedOpacity = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        })
        this.animatedTagTop = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [-30, 10],
            extrapolate: 'clamp'
        })
        this.animatedMarginTop = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [50, 30],
            extrapolate: 'clamp'
        })


    }
//   getlocation(){
//     Geocoder.init('AIzaSyC_wTdzP2bemmfisozmTxKrExtgXTkOApw');

//     Geocoder.from(41.89, 12.49).then(json => {
//         	var addressComponent = json.results[0].address_components[0];
//             console.log(addressComponent);
//         })
//         .catch(error => console.warn(error));

//   }
    navToView = (props) => (this.props.navigation.navigate("explore_view",props))
    render() {
        return (
            <View style={{ flex: 1 ,backgroundColor:"blue"}}>
                <View style={{ flex: 1 }}>
                    <Animated.View style={{ height: this.animatedHeaderHeight, backgroundColor: 'yellow', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
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
                            style={{ flexDirection: 'row', marginHorizontal: 20, position: 'relative', top: this.animatedTagTop, opacity: this.animatedOpacity }}
                        >
                            <Tag name="Guests" />
                            <Tag name="Dates" />

                        </Animated.View>
                    </Animated.View>
                    <ScrollView
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                            [
                                { nativeEvent: { contentOffset: { y: this.scrollY } } }
                            ]
                        )}
                    >
                        <View style={{ flex: 1, backgroundColor: 'green', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                What can we help you find, kishore?
                            </Text>

                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >

                                    <Category imageUri={require('../../assets/im1.jpg')}
                                        name="Home"
                                        h={130}
                                        w={130}
                                        navtoview = {this.navToView}
                                    />

                                    <Category imageUri={require('../../assets/im2.jpg')}
                                        name="Experiences"
                                        h={130}
                                        w={130}
                                        navtoview = {this.navToView}
                                    />
                                    <Category imageUri={require('../../assets/home.jpg')}
                                        name="Resturant"
                                        h={130}
                                        w={130}
                                        navtoview = {this.navToView}
                                    />
                                </ScrollView>
                            </View>
                            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                    Introducing Airbnb Plus
                                </Text>
                                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                    A new selection of homes verified for quality & comfort

                                </Text>
                                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={require('../../assets/home.jpg')}
                                    />

                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 40 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Homes around the world
                            </Text>
                            <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                <Home width={width}
                                    name="The Cozy Place"
                                    type="PRIVATE ROOM - 2 BEDS"
                                    price={82}
                                    rating={4}
                                />
                                <Home width={width}
                                    name="The Cozy Place"
                                    type="PRIVATE ROOM - 2 BEDS"
                                    price={82}
                                    rating={4}
                                />
                                 <TouchableOpacity onPress={() => this.props.navigation.navigate("explore_view",{

                                    })}>
                                <Home width={width}
                                    name="The Cozy Place"
                                    type="PRIVATE ROOM - 2 BEDS"
                                    price={82}
                                    rating={4}
                                />
                                </TouchableOpacity>

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