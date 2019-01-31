import React from "react";
import {
    StyleSheet,ScrollView
} from "react-native";

import Category from '../components/Explore/Category'
import * as cat_data from '../../data/Explore_data/Category_data'
export default class H_Scroll extends React.Component {

    state={
        cat_data:cat_data.data,
        cat_height:cat_data.height,
        cat_width:cat_data.width
    }
    
    addToSaved = (arr)=>(this.setState({cat_data:arr}))
    render() {
         
        if(!this.state.cat_data) <View/>
        return (
            <ScrollView
            horizontal={true}
            style={{height:200}}
            showsHorizontalScrollIndicator={false}
            >
                {this.state.cat_data.map(data => {
                        return(<Category 
                        imageUri={data.imageUri}
                            name={data.name}
                            key={data.key}
                            h={this.state.cat_height}
                            w={this.state.cat_width}
                            navtoview = {this.props.navtoview}
                            cat_data = {this.state.cat_data}
                            
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