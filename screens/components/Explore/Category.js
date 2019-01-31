import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

class Category extends Component {
    state = {
        liked:false
    }
    addthis = (data)=>{
        if(data.name == this.props.name)
            return{
                ...data,
                liked:!data.liked
            }
        else return data
    }
    Likehandler= ()=>{
        this.setState(prevstate => (
            {liked:!prevstate.liked}
        ))
        // console.log(this.props.cat_data)
        // const newarr = this.props.cat_data.map(this.addthis)
        // this.props.addtosaved(newarr)
        // this.props.sdts()
    }
    render() {
        return (
    
                // 

                <View  style={{ backgroundColor:"white",height: this.props.h, width: this.props.w, marginLeft: 20 ,borderRadius: 15}}>
                    <TouchableOpacity onPress={() => (this.props.navtoview(this.props))} style={{position:"absolute"}}>
                    <View >
                        <Image source={this.props.imageUri}
                            style={{ flex: 1, width: 200, height: 130, resizeMode: 'cover' ,borderRadius: 15}}
                        />
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{position:"absolute",left:160,top:10}} onPress={this.Likehandler}>
                    {this.state.liked ? 
                    <Icon name="ios-heart" color='#ff8c1a' size={24} />:
                    <Icon name="ios-heart-empty" color='#ff8c1a' size={24} />}
                    </TouchableOpacity>
                    <View style={{paddingLeft: 10, paddingTop: 10,position:"absolute",top:130 }}>
                        <Text style={{fontWeight:"bold",fontSize:15,}}>{this.props.name}</Text>
                    </View>
                </View>
                // 

        );
    }
}
export default Category;

const styles = StyleSheet.create({
    category: {
        backgroundColor: 'red',
        
    }
});