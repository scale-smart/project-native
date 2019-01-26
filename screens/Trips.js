import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
//import Icon from 'react-native-vector-icons/Ionicons'
class Trips extends Component {

    static navigationOptions = ({navigation}) => ({
        tabBarLabel: 'TRIPS',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('../assets/airbnb.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
        )
      })

    render() {
        return (
            <View style={styles.container}>
                <Text>Trips</Text>
            </View>
        );
    }
}
export default Trips;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});