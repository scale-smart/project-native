import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";

class Category extends Component {

    render() {
        console.log("this.props")
        console.log(this.props)

        return (
            <TouchableOpacity onPress={() => (this.props.navtoview(this.props))}>

            <View style={{ height: this.props.h, width: this.props.w, marginLeft: 20, borderWidth: 0.5, borderColor: 'black' ,borderRadius: 20,elevation:1}}>
                <View style={{ flex: 2 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' ,borderRadius: 20}}
                    />
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text>{this.props.name}</Text>
                </View>
            </View>
            </TouchableOpacity>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});