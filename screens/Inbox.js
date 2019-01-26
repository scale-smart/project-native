import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
class Inbox extends Component {

    static navigationOptions = ({navigation}) => ({
        tabBarLabel: 'INBOX',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-chatboxes" color={tintColor} size={24} />
        )
      })

    render() {
        return (
            <View style={styles.container}>
                <Text>Inbox</Text>
            </View>
        );
    }
}
export default Inbox;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});