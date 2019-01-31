import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,TouchableOpacity,Image,TextInput,Alert
} from "react-native";
import Allsaved from './allsaved.js'
import Icon from 'react-native-vector-icons/Ionicons'
import Econ from 'react-native-vector-icons/MaterialIcons'
export default class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image:'',
            name:'',
            PhoneNumber:'',
            Email:'',
            Address:'',
            success:false,
        };
    }
    
    static navigationOptions = ({navigation}) => ({
        tabBarLabel: 'PROFILE',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-person" color={tintColor} size={24} />
        )
      })
    updateProfile = ()=>{
        this.setState({
            success:true
        })
        console.log(this.state.success)
    }
     
      redirect=(obj)=>{
          this.props.navigation.navigate("account_details",obj)
      }

      componentWillMount=()=>{
         this.setState({
             name:this.props.navigation.getParam("name"),
             image:this.props.navigation.getParam("img"),
         })
      }
         render() {
             if(this.state.success)
                return <Allsaved rd={this.redirect} obj={this.state}/>
        return (
        <View>
            <View style={{marginTop:20}}>
               <TouchableOpacity style={styles.arrow} onPress={() => this.props.navigation.navigate("account_details")} >
                    <Icon name="ios-arrow-back" color="#ff8c1a" size={30} />
                 </TouchableOpacity>
            </View>
            <View style={styles.Container}>
                 <Text style={styles.editprofile}>Edit Profile</Text>
            </View>
             <View style={styles.imageview}>
                  <Image 
                     source={{uri:this.state.image}}
                     style={styles.image}/>
                   <TouchableOpacity style={{marginLeft:10}} onPress={() => this.props.navigation.navigate("account_details")} >
                     <Text>Edit Photo</Text>
                   </TouchableOpacity>
             </View>
             <View style={styles.common}>
                    <Text style={{fontSize:12}}>Name</Text>
                     <TextInput style={{borderBottomColor:'#ff8c1a'}}
                         keyboardType='default'
                         defaultValue={this.state.name}
                         autoCorrect={false}
                         onChangeText={(name) => this.setState({name})}/>
             </View>
             <View style={styles.common}>
                    <Text style={{fontSize:12}}>PhoneNumber</Text>
                     <TextInput 
                         keyboardType='numeric'
                         autoCorrect={false}
                         maxLength={10}
                         onChangeText={(PhoneNumber) => this.setState({PhoneNumber})}
                         value={this.state.PhoneNumber}
                    />
             </View>
             <View style={styles.common}>
                    <Text style={{fontSize:12}}>Email</Text>
                     <TextInput 
                         keyboardType='email-address'
                         autoCorrect={false}
                         />
             </View>
             <View style={styles.common}>
                    <Text style={{fontSize:12}}>Address</Text>
                    {/* <TouchableOpacity style={{marginLeft:18,height:30,width:30}} onPress={() => this
                         <Econ name="clear" color="#ff8c1a" size={10} /> */}
                     <TextInput 
                         keyboardType='default'
                         autoCorrect={false}
                         multiline={true}
                         numberOfLines={2}
                         />
             </View>
             <View>
                <TouchableOpacity style={styles.saved} onPress={this.updateProfile}> 
                        <Text style={{fontSize:22,color:'#ffffff'}}>Save</Text>
                </TouchableOpacity>
             </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        elevation:2
    },
    arrow: {
        marginLeft:18,
        height:30,
        width:30
    },
    editprofile: { 
        fontWeight:'bold',
        marginLeft:15,
        marginTop:10,
        fontSize:18
   },
    imageview: { 
        marginTop:30,
        marginLeft:10,
        height:52,
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1,
        flexDirection:'row',
        alignItems:'center'
    },
    image: { 
        width:45,
        height:45,
        borderRadius:25,
        backgroundColor:'#f2f2f2'
    },
    common:{ 
        marginLeft:15,
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1,
        marginTop:10
    },
    saved: {
        marginLeft:140,
        marginTop:20,
        alignItems:'center',
        backgroundColor:'#ff8c1a',
        height:38,
        width:70,
        borderRadius:10
    },
}
)