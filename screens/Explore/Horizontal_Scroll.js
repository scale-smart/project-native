import React from "react";
import {
    StyleSheet,ScrollView
} from "react-native";
import * as cat_data from '../../data/Explore_data/Category_data'
import Category from '../components/Explore/Category'
export default class H_Scroll extends React.Component {

    render() {
        return (
            <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            >

                {cat_data.data.map(data => {
                        return(<Category 
                        imageUri={data.imageUri}
                            name={data.name}
                            key={data.key}
                            h={cat_data.height}
                            w={cat_data.width}
                            navtoview = {this.props.navtoview}
                        />)
                    }
                )} 

            </ScrollView>
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