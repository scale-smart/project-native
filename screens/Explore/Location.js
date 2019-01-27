import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import {Location} from 'expo';
class Location_Search extends Component {
    state = {
        address:"waiting for the address"
    }
    static navigationOptions = ({navigation}) => ({
       header:null
      })

    componentWillMount(){
        this._getAddressAsync()
    }

    _getAddressAsync = async () => {
        const address = await Location.reverseGeocodeAsync(this.props.navigation.getParam('coords'))
        console.log(address)
        this.setState({address})
        }

    render() {
        return (
            <View style={styles.container}>
                <Text>search for the location...!!</Text>
                <Text>{this.props.navigation.getParam('coords').latitude}</Text>
                <Text>{this.props.navigation.getParam('coords').longitude}</Text>
                <Text>{this.state.address[0].city}</Text>
                <Text>{this.state.address[0].country}</Text>
                <Text>{this.state.address[0].postalCode}</Text>
                <Text>{this.state.address[0].region}</Text>
                
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
    }
});