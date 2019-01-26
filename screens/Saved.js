import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
class Saved extends Component {

    static navigationOptions = ({navigation}) => ({
        tabBarLabel: 'SAVED',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-heart" color={tintColor} size={24} />
        )
      })

    render() {
        return (
            <View style={styles.container}>
                <Text>Saved</Text>
            </View>
        );
    }
}
export default Saved;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});