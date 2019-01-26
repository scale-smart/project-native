






            



import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import * as home_data from '../../data/Explore_data/Home_data'
import Home from '../components/Explore/Home'
export default class Homes_Around extends React.Component {

    
    render() {
        return (
            <View style={{ marginTop: 40 }}>
                <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                    Homes around the world
                </Text>
                <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {home_data.data.map(data => {
                                return(<Home 
                                imageUri={data.imageUri}
                                    name={data.name}
                                    key={data.key}
                                    rating={data.rating}
                                    w={data.width}
                                    price={data.price}
                                    navtoview = {this.props.navtoview}
                                />)
                            }
                        )} 
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
        



