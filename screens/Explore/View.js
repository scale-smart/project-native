import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Animated,ScrollView,
    WebView
    
} from "react-native";
import {Video} from "expo"
import VideoPlayer from './videoplayer.js';
import Icon from 'react-native-vector-icons/Ionicons'
import {Header} from 'react-navigation'
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

class Explore_view extends Component {

    state = {
        scrollY: new Animated.Value(0),
    };

    _renderScrollViewContent() {
        const data = Array.from({length: 30});
        return (
          <View style={styles.scrollViewContent}>
          <ScrollView
          horizontal={true}
          >
           <View style={{margin:10}}>
            <VideoPlayer
                    videoProps={{
                        shouldPlay: false,
                        resizeMode: Video.RESIZE_MODE_CONTAIN,
                        source: require('../../assets/video2.mp4'),
                        posterSource:require('../../assets/im1.jpg'),
                        usePoster:true
                        
                    }}
                    isPortrait={true}
                    playFromPositionMillis={0}
            />
            </View>
            <View style={{margin:10}}>
           <VideoPlayer
                    videoProps={{
                        shouldPlay: false,
                        resizeMode: Video.RESIZE_MODE_CONTAIN,
                        source: require('../../assets/video2.mp4'),
                        posterSource:require('../../assets/im2.jpg'),
                        usePoster:true
                        
                    }}
                    isPortrait={true}
                    playFromPositionMillis={0}
            />
            </View>
            <View style={{margin:10}}>
           <VideoPlayer
                    videoProps={{
                        shouldPlay: false,
                        resizeMode: Video.RESIZE_MODE_CONTAIN,
                        source: require('../../assets/video1.mp4'),
                        posterSource:require('../../assets/home.jpg'),
                        usePoster:true
                        
                    }}
                    isPortrait={true}
                    playFromPositionMillis={0}
            />
            </View>
            </ScrollView>
            <View>
                
            </View>
          </View>
        );
      }
    static navigationOptions = ({ navigation }) => {
        
        return {
            
            header:null,
            //headerBackground : <Image style={StyleSheet.absoluteFill} source={navigation.getParam('imageUri')}/>,
            headerStyle:{
                backgroundColor:"#ff8c1a",
                marginTop:-20, 
                marginBottom:100   
                           
            }
            
        };
    };
    componentWillMount(){
        Header.HEIGHT = 200
    }
    render() {

        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
            extrapolate: 'clamp',
          });

        const imageOpacity = this.state.scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [1, 1, 0],
        extrapolate: 'clamp',
        });

        const imageTranslate = this.state.scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [0, -50],
        extrapolate: 'clamp',
        });

        return(
        <View style={styles.fill}>
              <ScrollView
                style={styles.fill}
                
                scrollEventThrottle={16}
                onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
                )}
              >
                {this._renderScrollViewContent()}
              </ScrollView>
            <Animated.View style={[styles.header, {height: headerHeight}]}>
            <Animated.Image
                style={[
                styles.backgroundImage,
                { transform: [{translateY: imageTranslate}]},
                ]}
                source={this.props.navigation.getParam('imageUri')}
            />
             <View style={{height:50,borderWidth:0,flexDirection:"row",alignItems:"center"}}>
                <TouchableOpacity style={{marginLeft:18,height:30,width:30}} onPress={() => this.props.navigation.navigate("explore_home")} >
                    <Icon name="ios-arrow-back" color="white" size={30} />
                </TouchableOpacity>
                <Text style={styles.title}>Title</Text>
                <TouchableOpacity style={{marginLeft:200}} >
                    <Icon name="ios-arrow-back" color="red" size={24} />
                </TouchableOpacity>
            </View>           
                {/* <View style={styles.bar}>
                    
                </View> */}

            </Animated.View>
        </View>
        )

    }
}
export default Explore_view;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         backgroundColor:'black'
//         //justifyContent: 'center'
//     }
// });

const styles = StyleSheet.create({
    fill: {
      flex: 1,
    },
    row: {
      height: 40,
      margin: 16,
      backgroundColor: '#D3D3D3',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#03A9F4',
        overflow: 'hidden',
      },
      bar: {
        marginTop: 28,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 18,
        paddingLeft:40
      },
      scrollViewContent: {
        marginTop: HEADER_MAX_HEIGHT+20,
      },
      backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: null,
        height: HEADER_MAX_HEIGHT,
        resizeMode: 'cover',
      },
  });